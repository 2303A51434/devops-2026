import React from "react";

function Payment() {

  const handlePayment = (method) => {
    alert(`Payment Successful using ${method}`);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Payment Options</h2>

      <button onClick={() => handlePayment("PhonePe")}>
        PhonePe
      </button>

      <button
        onClick={() => handlePayment("Credit/Debit Card")}
        style={{ margin: "0 10px" }}
      >
        Card
      </button>

      <button onClick={() => handlePayment("UPI")}>
        UPI
      </button>
    </div>
  );
}

export default Payment;
