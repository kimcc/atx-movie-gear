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
    cameras(model: String): [Camera]
    camera(_id: ID!): Camera
    user: User
    order(_id: ID!): Order
    checkout(cameras: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, phoneNumber: String, mailList: Boolean): Auth
    addOrder(User: ID!, purchaseDate: String!, reservationDates: String!, reservationDays: Int!, cameras: [ID]!, projectType: String!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, phoneNumber: String, mailList: Boolean): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;