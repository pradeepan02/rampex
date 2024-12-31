// import React, { useEffect, useRef, useState } from "react";

// const Useref = () => {
//   const [text, setText] = useState("");
//   const prevText = useRef("");

//   useEffect(() => {
//     prevText.current = text; 
//   }, [text]); 

//   return (
//     <div>
//       <h1>Example of useRef</h1>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <p>The current text: {text}</p>
//       <p>The previous text: {prevText.current}</p>
//     </div>
//   );
// };

// export default Useref;
import React, { useEffect, useRef, useState } from "react";

const Useref = () => {
  const [text, setText] = useState(0);
  const prevText = useRef(0);

  useEffect(() => {
    prevText.current = text; 
  }, [text]); 

  return (
    <div>
      <h1>Example of useRef</h1>
      <input
        type="number"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>The current text: {text}</p>
      <p>The previous text: {prevText.current}</p>
    </div>
  );
};

export default Useref;
