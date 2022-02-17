import React from "react";

export const CoinDetailsContext = React.createContext(null);

export const useCoinDetailsContext = () => {
  const context = React.useContext(CoinDetailsContext);

  if (!context) {
    throw new Error("useCoinDetailsContext must only be used within its Provider");
  }

  return context;
};
