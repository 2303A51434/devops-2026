import React, { useState } from "react";
import CartItem from "./CartItem";
import tshirtImg from "./images/tshirt.jpeg";
import iphoneImg from "./images/iphone.jpeg";
import laptopImg from "./images/laptop.jpeg";
import ovenImg from "./images/oven.jpeg";
import tableImg from "./images/table.jpeg";

function Cart() {
  const [products] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 65000,
      image: laptopImg
      
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      image: iphoneImg 
      
    },
    {
      id: 3,
      name: "T-Shirt",
      price: 999,
      image: tshirtImg 
    },
    {
      id: 4,
      name: "Microwave Oven",
      price: 12000,
      image:ovenImg
    },
    {
      id: 5,
      name: "Study Table",
      price: 7000,
      image: tableImg
    }
  ]);

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("products");
  const [paymentMethod, setPaymentMethod] = useState("");

  // Add to Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  // ---------------- UI PAGES ----------------

  if (page === "payment") {
    return (
      <div style={styles.page}>
        <h2>Select Payment Method</h2>

        <button onClick={() => setPaymentMethod("UPI")}>UPI</button>
        <button onClick={() => setPaymentMethod("Card")}>Card</button>
        <button onClick={() => setPaymentMethod("COD")}>Cash On Delivery</button>

        <br /><br />

        {paymentMethod && (
          <button onClick={() => setPage("success")}>
            Pay ₹{getTotal()}
          </button>
        )}
      </div>
    );
  }

  if (page === "success") {
    return (
      <div style={styles.page}>
        <h1>✅ Payment Successful</h1>
        <h2>Order Placed Successfully</h2>
        <p>Total Paid: ₹{getTotal()}</p>
        <p>Delivery Status: Processing 🚚</p>

        <button onClick={() => window.location.reload()}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1>🛒Shopping Store</h1>

      <div style={styles.grid}>
        {products.map((p) => (
          <CartItem key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>

      <hr />

      <h2>Cart Items: {cart.length}</h2>
      <h3>Total: ₹{getTotal()}</h3>

      {cart.length > 0 && (
        <button onClick={() => setPage("payment")}>
          Proceed To Payment
        </button>
      )}
    </div>
  );
}

const styles = {
  page: {
    background: "linear-gradient(to right, #dfe9f3, #ffffff)",
    minHeight: "100vh",
    padding: "20px",
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "20px"
  }
};

export default Cart;
