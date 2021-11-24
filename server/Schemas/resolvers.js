const { AuthenticationError } = require('apollo-server-express');
const { User, Camera, Lens, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {  
    Cameras: async (parent, args) => {
      return await Camera.findAll();
    },

    Camera: async (parent, { _id }) => {
      return await Product.findById(_id)
    },

    Lenses: async (parent, args) => {
      return await Lens.findAll();
    },

    Lens: async (parent, { _id }) => {
      return await Lens.findById(_id)
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
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