import React, { useContext } from "react";
import { GlobalData } from "./Commerce";

const ChildB = () => {
  const { color } = useContext(GlobalData);
  return (
    <div>
      <h1 style={color}>CHILD B</h1>
    </div>
  );
};

export default ChildB;
