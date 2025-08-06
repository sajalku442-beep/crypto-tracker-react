import React from "react";

import { createContext } from "react";
import { useState, useEffect } from "react";

export const CryptoContext = createContext();

const CryptoContextProvider = (props) => {
  const [coin, setCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-qSiBRLm4rJdQ2JY4ExVrwHjs",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .then((res) => setCoin(res))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchData();
  }, [currency]);
  const Context = {
   coin,currency,setCurrency
 }
  return (
    <CryptoContext.Provider value={Context}>
      {props.children}
    </CryptoContext.Provider>
  );
};
export default CryptoContextProvider;
