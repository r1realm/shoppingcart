import React from "react";

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice= cartItems.reduce((a, c) => a + c.precio*c.qty,0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 50 ? 0 : 10;
  //minimum set price is $40, if surpassed, then we will charge $3 more. 
  const Total = itemsPrice+taxPrice+shippingPrice;

  // the reduce method uses two parameter, accumulator and current item

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}

        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} * ${item.precio.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2"><em>Total Price</em></div>
            <div className="col-1 text-right">${Total.toFixed(2)}</div>
          </div>
        </>
      )}
    </aside>
  );
}
export default Basket;

