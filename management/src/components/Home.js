import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/homeStyles.css";

const Home = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/payment");
  };

  return (
    <div className="home-container">
      <h1>Welcome to Event Booking</h1>
      <p>Book your event now and enjoy seamless entry!</p>
      <button className="book-btn" onClick={handleBookNow}>
        Book Now
      </button>
    </div>
  );
};

export default Home;
