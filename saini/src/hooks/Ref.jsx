import React, { useRef } from "react";

const Ref = () => {
  const r = useRef();

  // useRef ik object return krta hai.. us main current hota hai
  const width = () => {
    console.log(r);  
    r.current.style.width = "400px";   // for use css style and width is the property of css
  };

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        ref={r} // giving reference to useRef
        style={{ border: "1px solid black" }}
      />
      <br />
      {/* buton click krne par width increase hoja gi input field ki kyu ki ref input field ka diya */}
      <button onClick={width} style={{ border: "1px solid black" }}>   
        click
      </button>
    </div>
  );
};

export default Ref;
