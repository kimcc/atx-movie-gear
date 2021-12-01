import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get')
      const cameras = cart.map(item => item._id);
      let reservationDate = await idbPromise('reservationDate', 'get')
      let projectType = await idbPromise('projectType', 'get');

      console.log(reservationDate[0])

      if (cameras.length) {
        const { data } = 
        await addOrder(
          { variables: {
              cameras,
              reservationDate: reservationDate.splice(-1).toString(),
              projectType: projectType.splice(-1).toString() 
            }
          });
        const cameraData = data.addOrder.cameras;

        cameraData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      idbPromise( 'reservationDate','deleteData');
      idbPromise( 'projectType','deleteData');

      setTimeout(()=>{
        window.location.assign('/');
      }, 3000);
    }
    saveOrder();
  }, [addOrder]);
  return (
    <div>
        <h1>Success!</h1>
        <h2>
          Thank you for your purchase!
        </h2>
        <h2>
          You will now be redirected to the homepage
        </h2>
    </div>
  );
};

export default Success;