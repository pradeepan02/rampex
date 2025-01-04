import React, { createContext, useState } from "react";


export const Authcontext = createContext();
const Authprovider = ({child}) => {
  const [log, islog] = useState();
  return (
      <Authcontext.Provider value={{ log, islog }}>
          {child}
    </Authcontext.Provider>
  );
};

export default Authprovider;
