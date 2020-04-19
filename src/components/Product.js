import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { img, inCart } = this.props.product;
    console.log(inCart)

    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log("you clicked the image")}
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() =>console.log("you clicked the cart")
              }
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  {""}
                  inCart
                </p>
              ) : (
                <i className="fas fa-cart-plus"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
