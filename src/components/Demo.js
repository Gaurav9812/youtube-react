import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [primeNumber, setPrimeNumber] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => {
    return findPrime(primeNumber);
  }, [primeNumber]);

  return (
    <div
      className={
        "w-96 h-96 border border-black " +
        (isDarkTheme && "bg-black text-white")
      }
    >
      <button
        className="p-2 mx-2 bg-green-400"
        onClick={() => {
          console.log("dsad");
          setIsDarkTheme(!isDarkTheme);
        }}
      >
        Toggle
      </button>
      <input
        value={primeNumber}
        onChange={(e) => setPrimeNumber(e.target.value)}
        className="border border-black"
      />
      <div>
        <h1 className="font-bold text-3xl">Nth prime number: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
