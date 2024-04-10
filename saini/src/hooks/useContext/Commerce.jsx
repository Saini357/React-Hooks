import React, { createContext, useState } from "react";

export const GlobalData = createContext();

const Commerce = ({ children }) => {
  const [color, setColor] = useState({ color: "red" });
  return (
    <GlobalData.Provider value={{ color, setColor }}>
      {children}
    </GlobalData.Provider>
  );
};

export default Commerce;
