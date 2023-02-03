// import "aframe";
// import "aframe-particle-system-component";
// import { Entity, Scene } from "aframe-react";
import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import data from "./Data";
import Header from "./components/Header";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, {...product, qty:1}]);
    }
    //IN THE ELSE PART THE PRODUCT DOES NOT EXIST, WE NEED OT ADD IT.
    //TO ADD THE PRODUCT, WE USE THE SETCARTITEMS VARIABLE AND USE THE ARRAY CONCATINATION AND JOIN IT WITH PRODCUTS AND, SETTING THE QTY PRODUCT AS ONE.
  };
  return (
    <>
      <Header />
    </>
  );
}

export default App;
