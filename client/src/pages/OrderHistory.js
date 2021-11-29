import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Cameras</Link>

        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  Date: {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <h4>
                  Date of Pick Up/drop off: {order.reservationDate}
                </h4>
                <h4>
                  project Type: {order.projectType}
                </h4>
                <div className="flex-row">
                  {order.cameras.map(({ _id, image, brand, model, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/cameras/${_id}`}>
                        <img alt={model} src={`/images/${image}`} />
                        <p>{brand+ " " + model +" reserved day"}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
