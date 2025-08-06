import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CryptoContext } from "../Context/Context";
import { Line } from "react-chartjs-2";
import "./Search.css";

const Search = () => {
  const { input } = useParams();

  const { coin, currency } = useContext(CryptoContext);
  const [searchCoin, setSearchCoin] = useState([]);
  

  useEffect(() => {
    if (coin.length > 0 && input) {
      const filtered = coin.filter((data) =>
        data.name.toLowerCase().includes(input.toLowerCase())
      );
      setSearchCoin(filtered);
    }
  }, [coin, input]);



  return (
    <div className="search-container">
      {searchCoin.map((data) => (
        <div key={data.id} className="coin-card">
          <Link to={`/chart/${data.id}`}>
            <h2>{data.name}</h2>
            <img src={data.image} alt={data.name} />
            <p>
              Price: {currency.symbol} {data.current_price}
            </p>
            <p>
              Market Cap: {currency.symbol} {data.market_cap.toLocaleString()}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Search;
