const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID
    item_type: String
    model: String
    brand: String
    resolution: String
    description: String
    Compatibility: String
    image: String
    reserveDays: Int
    price: Float
    quantity: Int
  }

  type Order {
    _id: ID
    purchaseDate: String
    reservationDate: String
    products:[Product]
    projectType: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    mailList: Boolean
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    products( name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, phoneNumber: String, mailList: Boolean): Auth
    addOrder(products: [ID]!, reservationDate: String!, projectType: String!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, phoneNumber: String, mailList: Boolean): User
    updateProduct(_id: ID, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;