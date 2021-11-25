import { gql } from '@apollo/client';

export const QUERY_CAMERAS = gql`
  query getCameras {
    cameras{
      _id
      modal
      brand
      resolution
      lensCombatibility
      image
      reserveDays
      price
      quantity
    }
  }
`;

export const QUERY_LENSES = gql`
  query getLenses{
    lenses{
      Name
      Type
      brand
      image
      reserveDays
      price
      quantity
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      phoneNumber
      mailList
      orders {
        _id
        purchaseDate
        reservationDate
        products {
          _id
          brand
          model
          price
          reserveDays
          image
        }
      }
    }
  }
`;
