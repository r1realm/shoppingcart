import React from "react";
import Product from "../components/Product";

function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className=" block col-2">
      <h2>Products to sell</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>

      {/* <a-assets>
        <a-asset-item
          id="higokumaru"
          src="./assets/anime/anime_higokumaru/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <a-assets>
        <a-asset-item
          id="magician"
          src="./assets/anime/anime_magician/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <a-assets>
        <a-asset-item
          id="momonga"
          src="./assets/anime/anime_momonga/scene.gltf"
        ></a-asset-item>
      </a-assets> */}
    </main>
  );
}

export default Main;
