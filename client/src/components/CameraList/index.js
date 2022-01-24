import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import ProductCard from '../ProductCard';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { idbPromise } from "../../utils/helpers";

function CameraList() {
  const [state, dispatch] = useStoreContext();
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if(data){
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });

      data.products.forEach((product)=> {
        idbPromise('products', "put", product);
      });
    }else if (!loading){
      // since we're offline, get all of the data from the `products` store
      idbPromise('products', 'get').then((products) => {
        // use retrieved data to set global state for offline browsing
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products
        });
      });
    }
  }, [data, loading, dispatch]);

  function products() {
    let cameras = [];
    for (let i=0; state.products.length > i; i++){
      if(state.products[i].item_type === "Camera"){
        cameras.push(state.products[i])
      }
    } 
    return cameras
  }

  console.log(products())
  return (
    <div className="m-2">
      {state.products.length ? (
        <div className=" cardList">
          {products().map((product) =>
            (
              <ProductCard
                key={product._id}
                _id={product._id}
                image={product.image}
                brand={product.brand}
                model={product.model}
                resolution={product.resolution}
                price={product.price}
                reserveDays={product.reserveDays}
                description={product.description}
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