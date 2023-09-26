import React, { useRef, useState } from "react";

const Demo1 = () => {
  const [Y, SetY] = useState(0);
  let X = 0;
  const ref = useRef(0);
  return (
    <div className="w-96 h-96 border border-black mx-2">
      <div>
        <div>
          <button className="bg-green-400 p-2 m-2" onClick={() => (X += 1)}>
            Increase X
          </button>
          <span>Let x : {X}</span>
        </div>
        <div>
          <button className="bg-green-400 p-2 m-2" onClick={() => SetY(Y + 1)}>
            Increase Y{" "}
          </button>
          <span> state Y : {Y}</span>
        </div>
        <div>
          <button
            className="bg-green-400 p-2 m-2"
            onClick={() => (ref.current += 1)}
          >
            Increase Z
          </button>
          <span>REF : {ref.current}</span>
        </div>
      </div>
    </div>
  );
};

export default Demo1;
