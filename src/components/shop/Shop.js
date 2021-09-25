import React from 'react';
import Order from '../Order/Order.js';
import Product from '../product/Product.js';
import './shop.css'
const Shop = (props) => {
    const { products, selected } = props;
    return (
      <div className="container-fluid">
        <div className="shop row">
          <h1 className="col-1"> </h1>
          <div className="col-8">
            <Product
              eventHandlerFunc={props.eventHandlerFunc}
              products={products}
            ></Product>
          </div>
          <div className="col-3 text-center border my-3 order">
            <Order selected={selected} className="text-dark"></Order>
          </div>
        </div>
      </div>
    );
};

export default Shop;