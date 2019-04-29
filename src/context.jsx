import React, { Component } from "react";

import { storeProducts, detailProduct } from "./data";

// create the context
const ProductContext = React.createContext();
// provider
// consumer

// create the provider ( provider )
class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };

  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = () => {
    console.log("hello from add to cart");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

// create teh consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
