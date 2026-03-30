import React from "react";
import products from "./products";

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Products</h2>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid gray",
              padding: "15px",
              margin: "10px",
              width: "200px",
              textAlign: "center"
            }}
          >
            <img src={product.image} alt={product.name} width="150" />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
