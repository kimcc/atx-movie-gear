import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import HomePageCard from '../HomePageCard';

import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { idbPromise } from "../../utils/helpers";

function HomePageCardList() {
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

  function filterproducts() {
    return state.products;
  }
    return(
        <div className="homepageCardView">
    <div className="mx-2 my-4">
      <h2 className="homepageFeatured my-3 mx-3" id="featured">New Arrivals</h2>
      {state.products.length ? (
        <div className="cardList flex-column">
          {filterproducts().slice(6, -5).map((product) => (
            <HomePageCard
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
      ) : (null

      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>

        </div>
    )
}

export default HomePageCardList;