import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  

  const [tenantid, setTenantId] = useState(null);
  const [userRole, setUserRole] = useState(0);
  const [transitionData, setTransitionData] = useState([])



  return (
    <AppContext.Provider
      value={{ tenantid, setTenantId,setTransitionData,transitionData,userRole, setUserRole }}  >
      {children}
    </AppContext.Provider>
  );
};



