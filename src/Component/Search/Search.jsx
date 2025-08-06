import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../Context/Context";
import { Line } from "react-chartjs-2";
import "./Search.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Search = () => {
  const { input } = useParams();

  const { coin, currency } = useContext(CryptoContext);
  const [searchCoin, setSearchCoin] = useState([]);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (coin.length > 0 && input) {
      const filtered = coin.filter((data) =>
        data.id.toLowerCase().includes(input.toLowerCase())
      );
      setSearchCoin(filtered);
    }
  }, [coin, input]);

  console.log("Search Term:", input);
  console.log("Filtered Coins:", searchCoin);

  useEffect(() => {
    if (!input) return;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-qSiBRLm4rJdQ2JY4ExVrwHjs",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${input}/market_chart?vs_currency=${currency.name}&days=120`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.prices) {
          const labels = data.prices.map((p) =>
            new Date(p[0]).toLocaleDateString()
          );
          const prices = data.prices.map((p) => p[1]);

          setChartData({
            labels,
            datasets: [
              {
                label: `${input.toUpperCase()} Price (USD)`,
                data: prices,
                borderColor: "orange",
                fill: false,
                tension: 0.3,
              },
            ],
          });
        }
      })
      .catch((err) => console.error(err));
  }, [input, currency.name]);

  return (
    <div className="search-container">
      {searchCoin.map((data) => (
        <div key={data.id} className="coin-card">
          <h2>{data.name}</h2>
          <img src={data.image} alt={data.name} />
          <p>
            Price: {currency.symbol} {data.current_price}
          </p>
          <p>
            Market Cap: {currency.symbol} {data.market_cap.toLocaleString()}
          </p>
        </div>
      ))}

      <div className="chart-section">
        <h3>Last 3 months Price Chart</h3>
        {chartData ? <Line data={chartData} /> : <p>Loading chart...</p>}
      </div>
    </div>
  );
};

export default Search;
