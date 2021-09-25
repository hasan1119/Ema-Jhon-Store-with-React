import React from 'react';
import Count from '../Product-count/Count.js';
import logo from './../../logo.png'
import './style.css'

const Header = (props) => {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <img style={{ width: "250px" }} src={logo} alt="" />
        </div>
        <nav style={{ background: "black" }}>
          <a href="/shop">Shop</a>
          <a href="/review">Order Review</a>
          <a href="/inventory">Manage INventory header</a>
        </nav>
        <div className="d-flex py-3 justify-content-center  bg-dark">
          <input
            onChange={props.eventHandler}
            className="w-75"
            type="text"
            placeholder="search here"
          />
          <div className="ms-2">
            <button className="btn">
              <i className="fas fa-cart-arrow-down text-white fs-4"></i>

              <Count quantity={props.quantity} headStyle="text-white fs-5 ms-2"></Count>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Header;