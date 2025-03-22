import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/paymentStyles.css";

const PaymentPage = () => {
  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    alert("Payment Successful!");
    navigate("/");
  };

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <p>Proceed with your payment securely.</p>
      <button className="pay-btn" onClick={handleConfirmPayment}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
