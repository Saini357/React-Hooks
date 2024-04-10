import React, { useMemo, useState } from "react";

const Memo = () => {
  const [incre, setIncre] = useState(0);
  const [decre, setDecre] = useState(100);

  function Dex() {
    if (decre > 0) {
      setDecre(decre - 1);
    }
  }

  const evenOrOdd = useMemo(() => (incre % 2 === 0 ? "even" : "odd"), [incre]);

  return (
    <div>
      <h2>MEMO</h2>

      <button
        onClick={() => setIncre(incre + 1)}
        style={{ border: "1px solid black" }}
      >
        {incre}: Increment
      </button>
      <br />
      {evenOrOdd}
      <br />
      <button onClick={Dex} style={{ border: "1px solid black" }}>
        {decre}: Decrement
      </button>
    </div>
  );
};

export default Memo;
