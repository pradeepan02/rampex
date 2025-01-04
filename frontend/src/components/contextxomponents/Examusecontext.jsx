import React, { createContext } from "react";
import Component2 from "./Component2";
import About from "../About";

// Create a context
export const ExamContext = createContext();

const Examusecontext = (props) => {
  return (
    <div>
      <ExamContext.Provider value={{ cgpa: 8.54 }}>
        <p>Exam</p>
        <Component2 />
      </ExamContext.Provider>
    </div>
  );
};

export default Examusecontext;
