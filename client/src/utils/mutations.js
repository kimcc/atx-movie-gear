import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!, $reservationDate: String!, $projectType: String!) {
    addOrder(products: $products, reservationDate: $reservationDate, projectType: $projectType) {
      purchaseDate
      reservationDate
      projectType
      products {
        _id
        brand
        model
        price
        quantity
        image
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $phoneNumber: String
    $mailList: Boolean
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      phoneNumber: $phoneNumber
      mailList: $mailList
    ) {
      token
      user {
        _id
      }
    }
  }
`;
