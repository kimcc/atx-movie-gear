import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import CameraItem from '../CameraItem';
import { QUERY_CAMERAS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';

import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CAMERAS } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";

function ProductList() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory} = state;
  const { loading, data } = useQuery(QUERY_CAMERAS);

  useEffect(() => {
    if(data){
      dispatch({
        type: UPDATE_CAMERAS,
        cameras: data.cameras
      });

      data.cameras.forEach((camera)=> {
        idbPromise('cameras', "put", camera);
      });
    }else if (!loading){
      // since we're offline, get all of the data from the `cameras` store
      idbPromise('cameras', 'get').then((cameras) => {
        // use retrieved data to set global state for offline browsing
        dispatch({
          type: UPDATE_CAMERAS,
          cameras: cameras
        });
      });
    }
  }, [data, loading, dispatch]);

  function filtercameras() {
    if (!currentCategory) {
      return state.cameras;
    }

    return state.cameras.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our cameras:</h2>
      {state.cameras.length ? (
        <div className="flex-row">
          {filtercameras().map((product) => (
            <CameraItem
              key={product._id}
              _id={product._id}
              image={product.image}
              brand={product.brand}
              model={product.model}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any cameras yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;