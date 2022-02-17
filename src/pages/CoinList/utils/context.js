import React from "react";

export const CoinsListContext = React.createContext(null);

export const useCoinsListContext = () => {
  const context = React.useContext(CoinsListContext);

  if (!context) {
    throw new Error("useCoinsListContext must only be used within its Provider");
  }

  return context;
};
