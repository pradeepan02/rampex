import React, { useState } from "react";

const Gallery = (props) => {
  const [num, setnum] = useState(0);
  console.log(num)
  return (
    <div>
      <h1>This is Gallery Page and the number is {num}</h1>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        increment
      </button>
      <button onMouseEnter={() => {
        setnum(num - 1);
      }}>decrement</button>
      <button onDoubleClick={() => {
        setnum(0)
      }}>reset</button>
    </div>
  );
};

export default Gallery;
