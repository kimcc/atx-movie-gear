const { AuthenticationError } = require('apollo-server-express');
const { User, Camera, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {  
    checkout: async (parent, args, context) =>{
      const order = new Order(args, { cameras: args.Camera});
      const { cameras } = await order.populate('cameras').execPopulate();
      const line_items = [];
      const url = new URL(context.headers.referer).origin;

      for (let i = 0; i < cameras.length; i++) {
        // generate product id
        const camera = await stripe.cameras.create({
          brand: cameras[i].brand,
          model: cameras[i].model,
          images: [`${url}/images/${cameras[i].image}`]
        });

        // generate price id using the product id
        const price = await stripe.prices.create({
          camera: camera.id,
          unit_amount: cameras[i].price * 100,
          currency: 'usd',
        });

        // add price id to the line items array
        line_items.push({
          price: price.id,
          reserveDays: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });
      
      return { session: session.id };
    },

    cameras: async (parent, args) => {
      return await Camera.find();
    },

    camera: async (parent, { _id }) => {
      return await Camera.findById(_id)
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.cameras',
        });
        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },

    order: async (parent, args, context) => {
      return await Order.findAll();

    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order(args);

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }

  }
}

module.exports = resolvers;