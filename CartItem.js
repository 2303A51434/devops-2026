import React from "react";

function CartItem({ product, addToCart }) {
  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>

      <img src={product.image} alt={product.name} style={styles.image} />

    

      <p>Price: ₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "contain",
    borderRadius: "15px"
  }
};

export default CartItem;
