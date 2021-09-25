import React from "react";
import Rating from "react-rating";
const Product = (props) => {
  const { products } = props;
  return (
    <div>
      <div>
        {products.map((product) => {
          return (
            <ProductCart
              key={product.key}
              eventHandlerFunc={props.eventHandlerFunc}
              product={product}
            ></ProductCart>
          );
        })}
      </div>
    </div>
  );
};
function ProductCart(props) {
    const { product, eventHandlerFunc } = props;
  return (
    <div className="row p-2 border my-3">
      <div className="product-image col-3">
        <img className="img-fluid" src={product.img} alt="" />
      </div>
      <div className="col-9">
        <h6 className="text-primary">{product.name}</h6>
        <div className="row">
          <div className="col-5">
            <p>by: {product.seller}</p>
            <p>Price: ${product.price}</p>
            <p>Shipping: ${product.shipping}</p>
            <p>only {product.stock} left in stock - order soon</p>
            <button
              onClick={() => eventHandlerFunc(product.key)}
              className="btn py-0 px-5"
              style={{ background: "goldenrod" }}
            >
              <i className="fas fa-cart-arrow-down"></i>
              add to cart
            </button>
          </div>
          <div className="col-7">
            <Rating
              style={{ color: "goldenrod" }}
              initialRating={product.star}
              emptySymbol="far fa-star"
              fullSymbol="fa fa-star"
              readonly
            />
            <div>
              <h5>Features</h5>
              <ul>
                {product.features.map((feature) => {
                  return (
                    <li key={feature.description}>
                      {feature?.description}: <b>{feature?.value}</b>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
