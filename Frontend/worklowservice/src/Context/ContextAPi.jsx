import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tenantid, setTenantId] = useState(null);



  return (
    <AppContext.Provider
      value={{ tenantid, setTenantId }}  >
      {children}
    </AppContext.Provider>
  );
};



