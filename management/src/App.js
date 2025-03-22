import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PaymentPage from "./components/PaymentPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
};

export default App;
