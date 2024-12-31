import React, { useContext } from "react";
import { ExamContext } from "./Examusecontext";
const Student = (props) => {
  var result = useContext(ExamContext);
  return (
    <div>
      <p>student result :{result.cgpa}</p>
    </div>
  );
};

export default Student;
