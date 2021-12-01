
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CAMERAS } from '../../utils/queries';
import AddToCart from '../AddToCart';

import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_CAMERAS
} from "../../utils/actions";

function CameraItemDetail(item) {
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
    }
  }, [cameras, data, loading, dispatch,  id]);

  return (
     <>
       {currentCamera ? (
        <div className="my-3">
         <h1 className="productTitle">{currentCamera.brand + " " + currentCamera.model}</h1>
           <Link to="/cameras">← Back to Cameras</Link>

             <div className="detailWrapper">
                <section className="flex-row">

          {/* Image Column */}
                  <div className="flex-column productImage mx-4 px-4">
                    <img src={`/images/${currentCamera.image}`} alt="product"/>
                  </div>

          {/* Description Column */}
                  <div className="flex-column productDescription mx-4 px-4">

          {/* title and price  */}
                    <h2 className="productDescriptionHeading">
                      {currentCamera.brand + " " + currentCamera.model}</h2>
                        <div>
                        <h3>${currentCamera.price}/day</h3>
                        </div>

          {/* Specs List */}
                    <section className="detailsText">
                      <h4>Specs</h4>
                          <ul className="specs">

                            <li className="my-2">
                              <div className="listTitle">Resolution: </div>
                              <div className="listElement">{currentCamera.resolution}</div>
                            </li>

                            <li className="my-2">
                              <div className="listTitle">Lens Compatibility: </div>
                              <div className="listElement">{currentCamera.lensCompatibility}</div>
                            </li>


                            <li className="my-2">
                              <div className="listTitle">About: </div>
                              <div className="listElement">{currentCamera.description}
                              </div>
                            </li>

                            <li className="my-2">
                              <div className="listTitle">In Stock: </div>
                              <div className="listElement">{currentCamera.quantity}</div>

                            </li>
                        </ul>
                        <AddToCart currentCamera={currentCamera} />
                      </section>
                  </div>

        {/* Add to Cart component */}
                  <div className="flex-column reservationAndCart mx-1 px-1">

                  </div>

               </section>
            </div>
          </div>
      ) : null}
     </>
  )
}

export default CameraItemDetail;