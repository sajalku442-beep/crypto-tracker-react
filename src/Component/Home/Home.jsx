import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { CryptoContext } from "../Context/Context";
import { Link } from "react-router-dom";
const Home = () => {
  const { coin, currency } = useContext(CryptoContext);
  

  return (
    <div>
      <div className="hero">
        <h1>Stay Ahead in the Crypto World 🚀</h1>
        <p>
          Track prices, analyze trends, and explore the crypto market with ease.
        </p>
      </div>

      <div>
        <div>
          <div className="slide_container">
            <div className="slide_track">
              {coin.map((data) => (
                <div key={data.id} className="slide">
                  <Link to={`/search/${data.id}`}>
                    <div className="coinName">
                      <img src={data.image} alt="" />
                      <h2>{data.name}</h2>
                    </div>
                    <h2>
                      {currency.symbol} {data.current_price}
                    </h2>
                    <h2
                      style={{
                        color:
                          data.market_cap_change_percentage_24h >= 0
                            ? "green"
                            : "red",
                      }}
                    >
                      {data.market_cap_change_percentage_24h}%
                    </h2>
                  </Link>
                </div>
              ))}
              
              {coin.map((data) => (
                <div key={data.id + "-copy"} className="slide">
                  <Link to={`/search/${data.id}`}>
                    <div className="coinName">
                      <img src={data.image} alt="" />
                      <h2>{data.name}</h2>
                    </div>
                    <h2>
                      {currency.symbol} {data.current_price}
                    </h2>
                    <h2
                      style={{
                        color:
                          data.market_cap_change_percentage_24h >= 0
                            ? "green"
                            : "red",
                      }}
                    >
                      {data.market_cap_change_percentage_24h}%
                    </h2>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="top-picks">
          <p>🔥 Trending Coins – Handpicked for You!</p>
        </section>
        <div className="topTable">
          <div className="table header">
            <h2>#</h2>
            <h2>Coin</h2>
            <h2>Price</h2>
            <h2 className="percent">24h Change</h2>
            <h2 className="marketCap">Market Cap</h2>
          </div>

          {coin.slice(0, 20).map((data) => (
            <div key={data.id} className="table">
              <h2>{data.market_cap_rank}</h2>
              <Link to={`/search/${data.id}`}>
                <div className="coinName">
                  <img src={data.image} alt="" />
                  <h2>{data.name}</h2>
                </div>
              </Link>
              <h2>
                {currency.symbol} {data.current_price}
              </h2>
              <h2
                className="percent"
                style={{
                  color:
                    data.market_cap_change_percentage_24h >= 0
                      ? "green"
                      : "red",
                }}
              >
                {data.market_cap_change_percentage_24h}%
              </h2>
              <h2 className="marketCap">{data.market_cap}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
