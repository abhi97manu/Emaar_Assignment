import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  

  const [tenantid, setTenantId] = useState(null);
  const [transitionData, setTransitionData] = useState([])



  return (
    <AppContext.Provider
      value={{ tenantid, setTenantId,setTransitionData,transitionData }}  >
      {children}
    </AppContext.Provider>
  );
};



