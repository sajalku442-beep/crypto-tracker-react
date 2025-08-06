import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CryptoContext } from "../Context/Context";
import "./Navbar.css";

const Navbar = () => {
  const [input, setInput] = useState();
  const { coin, currency, setCurrency } = useContext(CryptoContext);
  const navigate = useNavigate();

  const SubmitHandler = (data) => {
    data.preventDefault();
    navigate(`/search/${input}`);
  };

  return (
    <div>
      <div className="navbar">
        <Link to="/" className="brand">

          <span>CryptoTracker</span>
        </Link>

        <form onSubmit={SubmitHandler}>
          <input
            onChange={(data) => setInput(data.target.value.toLowerCase())}
            type="text"
          />
        </form>
        <select
          onChange={(e) => {
            const value = e.target.value;
            if (value === "usd") setCurrency({ name: "usd", symbol: "$" });
            if (value === "eur") setCurrency({ name: "eur", symbol: "€" });
            if (value === "inr") setCurrency({ name: "inr", symbol: "₹" });
          }}
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
