import React from "react";
import Count from "../Product-count/Count.js";
import "./order.css";
const Order = (props) => {
  let quantity = props.selected.length;
  let price = 0;
  let shipping = 0;

  for (const product of props.selected) {
    price = price + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = (price / 100 * 10).toFixed(2)
  const grandTotal =( Number(price) + Number(shipping) + Number(tax));
  return (
    <div>
      <div className="border">
        <h3>Order Summary</h3>
        <p>
          Items ordered:
          <Count quantity={quantity} headStyle="text-danger fs-6"></Count>
        </p>
        <hr className="m-0" />
        <table className="table">
          <tbody>
            <tr>
              <td className="text-start">Price:</td>
              <td className="text-start">${price.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="text-start">Shipping & Handling: </td>
              <td className="text-start">${shipping.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="text-start">Total before tax: </td>
              <td className="text-start">${(price + shipping).toFixed(2)}</td>
            </tr>
            <tr>
              <td className="text-start">Estimated Tax (10%): </td>
              <td className="text-start">${tax}</td>
            </tr>
            <tr>
              <td className="text-start text-danger fs-3">Order Total:</td>
              <td className="text-start text-danger fs-3">
                ${grandTotal.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
        <button
          style={{
            background: "goldenrod",
            border: "1px solid grey",
            marginBottom: "10px",
            padding: "2px 10px",
            borderRadius: "5px",
          }}
        >
          Review your order
        </button>
      </div>
    </div>
  );
};

export default Order;
