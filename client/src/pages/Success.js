import React, { useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);
  const [{cart}, dispatch] = useStoreContext();

  useEffect(() => {
    async function saveOrder() {
      const cameras = cart.map(item => item._id);

      if (cameras.length) {
        const { data } = await addOrder({ variables: { cameras } });
        const cameraData = data.addOrder.cameras;
      }

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