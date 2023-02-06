import React from "react";
import Product from "../components/Product";

function Main(props) {
  const { products, onAdd } = props;
  return (
  
    <main className=" block row-2">
      <h1>Welcome to the e-commerce store!</h1>
      <hr></hr>
      <h2>Products to sell</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>

    </main>
  );
}

export default Main;
