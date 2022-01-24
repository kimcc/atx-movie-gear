import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
{
    products{
      _id
      item_type
      model
      brand
      resolution
      Compatibility
      image
      reserveDays
      price
      quantity
      description
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
        projectType
        products {
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
