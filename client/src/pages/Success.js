import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get')
      const products = cart.map(item => item._id);
      let reservationDate = await idbPromise('reservationDate', 'get')
      let projectType = await idbPromise('projectType', 'get');

      console.log(reservationDate[0])

      if (products.length) {
        const { data } =
        await addOrder(
          { variables: {
              products,
              reservationDate: reservationDate.splice(-1).toString(),
              projectType: projectType.splice(-1).toString()
            }
          });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      idbPromise( 'reservationDate','deleteData');
      idbPromise( 'projectType','deleteData');

      setTimeout(()=>{
        window.location.assign('/');
      }, 9000);
    }
    saveOrder();
  }, [addOrder]);
  return (
    <div>
        <h1>Success!</h1>
        <h2>
          Thank you for your purchase!
        </h2>
        <br/>
        <h2>
          You will now be redirected to the homepage
        </h2>
    </div>
  );
};

export default Success;