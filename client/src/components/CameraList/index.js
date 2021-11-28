import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import CameraItem from '../CameraItem';
import { QUERY_CAMERAS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CAMERAS } from '../../utils/actions';
import 'bootstrap/dist/css/bootstrap.min.css';

function CameraList() {
  const [state, dispatch] = useStoreContext();
  const { loading, data } = useQuery(QUERY_CAMERAS);

  useEffect(() => {
    if(data){
      dispatch({
        type: UPDATE_CAMERAS,
        cameras: data.cameras
      });

    }
  }, [data, loading, dispatch]);

  function filtercameras() {
    return state.cameras;
  }

  return (
    <div className="my-2">
    <h2>Our cameras:</h2>
      {state.cameras.length ? (
        <div className="flex-row">
          {filtercameras().map((camera) => (
            <CameraItem
              key={camera._id}
              _id={camera._id}
              image={camera.image}
              brand={camera.brand}
              model={camera.model}
              resolution={camera.resolution}
              price={camera.price}
              reserveDays={camera.reserveDays}
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

export default CameraList;