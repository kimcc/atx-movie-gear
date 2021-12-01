import { gql } from '@apollo/client';

export const QUERY_CAMERAS = gql`
{
    cameras{
      _id
      model
      brand
      resolution
      lensCompatibility
      image
      reserveDays
      price
      quantity
      description
      about
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
        projectType
        cameras {
          _id
          brand
          model
          reserveDays
          price
          image
        }
      }
    }
  }
`;
