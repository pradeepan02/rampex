
import React, { useState } from "react";

function Slowfun(number) {
  for (let i = 0; i < 100000000; i++) {
    
    }
    return number * 2;
}

const Usememo = () => {
  const [theme, setTheme] = useState(true);
  const [num, setNum] = useState(0);

  const cotheme = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var dou = () => {
    return Slowfun(num);
  };

  return (
    <section>
      <h1>Example Without UseMemo</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => setTheme((!theme))}>Toggle</button>
      <h1 style={cotheme}>{dou()}</h1>
    </section>
  );
};

export default Usememo;
