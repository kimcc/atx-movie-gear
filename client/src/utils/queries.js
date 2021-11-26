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

export const QUERY_CHECKOUT = gql`
  query getCheckout($cameras: [ID]!) {
    checkout(cameras: $cameras) {
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
        cameras {
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
