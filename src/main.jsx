import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import CryptoContextProvider from "./Component/Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <CryptoContextProvider>
        <App />
      </CryptoContextProvider>
    </HashRouter>
  </StrictMode>
);
