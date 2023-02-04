import React from 'react';

function Product(props) {
      const {product, onAdd} = props;
  return (
    <div>
      <img src={product.url} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.precio}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
