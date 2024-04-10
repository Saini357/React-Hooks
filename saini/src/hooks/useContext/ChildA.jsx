import React, { useContext } from "react";
import { GlobalData } from "./Commerce";

const ChildA = () => {
  const { color, setColor } = useContext(GlobalData);

  return (
    <div>
      <p style={color}>hello</p>
      <button
        onClick={() => setColor({ color: "yellow", background: "cyan" })}
        style={{ border: "1px solid black" }}
      >
        color toggle
      </button>
    </div>
  );
};

export default ChildA;
