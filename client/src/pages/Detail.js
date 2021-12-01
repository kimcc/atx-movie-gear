import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import CameraItemDetail from '../components/CameraItemDetail';

import { QUERY_CAMERAS } from '../utils/queries';
import spinner from '../assets/spinner.gif';

import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_CAMERAS
} from "../utils/actions";
import { idbPromise } from "../utils/helpers";

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentCamera, setCurrentCamera] = useState({
});

  const { loading, data } = useQuery(QUERY_CAMERAS);

  const { cameras } = state;

  useEffect(() => {
    if (cameras.length) {
      setCurrentCamera(cameras.find((camera) => camera._id === id));
    }else if(data){
      dispatch({
        type: UPDATE_CAMERAS,
        cameras: data.cameras
      });
      data.cameras.forEach((camera) =>{
        idbPromise('cameras', 'put', camera);
      });
    }
  }, [cameras, data, loading, dispatch,  id]);

  return (
    <>
      {currentCamera ? (
        <div className="container space-between">
          <CameraItemDetail />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </>
  );
}

export default Detail;