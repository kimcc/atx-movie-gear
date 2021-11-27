const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Camera {
    _id: ID
    model: String
    brand: String
    resolution: String
    description: String
    lensCombatibility: String
    image: String
    reserveDays: Int
    price: Float
    quantity: Int
  }

  type Order {
    _id: ID
    User: [User]
    purchaseDate: String
    reservationDates: String
    reserveDays: Int
    cameras:[Camera]
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
    cameras( name: String): [Camera]
    camera(_id: ID!): Camera
    user: User
    order(_id: ID!): Order
    checkout(cameras: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, phoneNumber: String, mailList: Boolean): Auth
    addOrder(products: ID!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, phoneNumber: String, mailList: Boolean): User
    updateCamera(_id: ID, quantity: Int!): Camera
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;