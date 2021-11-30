import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import CameraCard from '../CameraCard';
import { QUERY_CAMERAS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CAMERAS } from '../../utils/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { idbPromise } from "../../utils/helpers";

function CameraList() {
  const [state, dispatch] = useStoreContext();
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
    return state.cameras;
  }

  return (
    <div className="my-2">
      {state.cameras.length ? (
        <div className="flex-row">
          {filtercameras().map((camera) => (
            <CameraCard
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