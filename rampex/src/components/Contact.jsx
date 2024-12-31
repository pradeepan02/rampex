import React, { useState, useEffect } from "react";

const Contact = (props) => {
  const [track, settrack] = useState(false);
  console.log(track);
  useEffect(() => {
    if (track) {
      console.log("good");
    } else {
      console.log("bad");
    }
  }, [track]);
  return (
    <div>
      <button 
        onClick={() => {
          settrack(true);
        }}
      >
        track
      </button>
      <button
        onClick={() => {
          settrack(false);
        }}
      >
        untrack
      </button>
    </div>
  );
};

export default Contact;
