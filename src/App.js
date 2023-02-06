import React, { useState } from "react";
import data from "./data";
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Success from "./components/Success.js";
import Cancel from "./components/Cancel.js";

//localhost:3000 -> Home this will direct it to the Main.js page where we will have all the items to sell
//localhost:3000/success -> Success(component)
//localhost:3000/cancel -> Cancel(component)

function App() {
  const { products } = data;
  //reads the products from data array
  const [cartItems, setCartItems] = useState([]);
//defining the state of each items from the data array

//DOWN BELOW the onAdd function only adds each items to the basket
//
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    //IN THE ELSE PART THE PRODUCT DOES NOT EXIST, WE NEED OT ADD IT.
    //TO ADD THE PRODUCT, WE USE THE SETCARTITEMS VARIABLE AND USE THE
    //ARRAY CONCATINATION AND JOIN IT WITH PRODCUTS AND, SETTING THE QTY PRODUCT AS ONE.

  };
   const onRemove = (product) => {
     const exist = cartItems.find((x) => x.id === product.id);
     if (exist.qty === 1) {
       setCartItems(cartItems.filter((x) => x.id !== product.id));
     } else {
       setCartItems(
         cartItems.map((x) =>
           x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
         )
       );
     }
   };
  return (
    <div>
      <Header countCartItems={cartItems.length} />
      <div className="row">
        <Main products={products} onAdd={onAdd} />
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
        <BrowserRouter>
          <Routes>
            {/* <Route index element={<Main />} /> */}
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
