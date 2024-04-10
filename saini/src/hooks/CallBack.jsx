import React, { useCallback, useEffect, useRef, useState } from "react";
import "../hooks/Callback.css";

const CallBack = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "WERTYUIOPLKJHGFDSAZXCVBNMwertyuioplkjhgfdsazxcvbnm";
    if (number) str += "1234567890";
    if (char) str += "`~!@#$%&()_+-={}[]?/ ";
    for (let i = 0; i < length; i++) {
      const randomNum = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomNum);
    }
    setPassword(pass);
  }, [length, number, char]);

  const copy = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, passwordGenerator]);

  return (
    <div>
      <div className="password-section">
        <input
          type="text"
          value={password}
          placeholder="Password"
          ref={passwordRef}
          readOnly
        />

        <button onClick={copy}>Copy</button>
      </div>
      <div className="settings-section">
        <div>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div>
          <input type="checkbox" onChange={() => setNumber((prev) => !prev)} />
          <label>Numbers</label>
        </div>
        <div>
          <input type="checkbox" onChange={() => setChar((prev) => !prev)} />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
};

export default CallBack;
