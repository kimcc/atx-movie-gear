const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Camera {
    _id: ID
    modal: String
    brand: String
    resolution: String
    lensCombatibility: String
    image: String
    reserveDays: Int
    price: Float
    quantity: Int
  }

  type Lens {
    _id: ID
    Name: String
    Type: String
    brand: String
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
    products:[Camera, Lens]
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
    Cameras: [Camera]
    Camera(_id: ID!): Camera
    Lenses: [Lens]
    Lens(_id: ID!): Lens
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, phoneNumber: String, mailList: Boolean): Auth
    addOrder(User: ID!, purchaseDate: String!, reservationDates: String!, reservationDays: Int!, products: [ID]!, projectType: String!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, phoneNumber: String, mailList: Boolean): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;