import React, { PureComponent } from "react";

import Product from "./Product";
import Title from "./Title";

import { ProductConsumer } from "../context";

//working with context api
class ProductList extends PureComponent {
  state = {
    products: []
  };
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
      //<Product />
    );
  }
}

export default ProductList;
