import React from "react";
import { useGetApiCallWithTenant } from "../Utills/useGetApiCall";
import { useContext } from "react";
import { AppContext } from "../Context/ContextAPi";

import YourTasks from "./YourTasks";
import ToggleView from "../Components/ToggleView";
const UserProfile = () => {
  
  const { tenantid } = useContext(AppContext);
  const { data } = useGetApiCallWithTenant(`tenant/userDetails`, tenantid);
  const role = data?.data?.role;
  

  return (
    <>
    <div className="w-full h-full bg-red-200">
      {role !== "Admin" ? (
        <div className="w-full h-full bg-red-400">
        { data && <YourTasks key = {tenantid} />}
        </div>
      ) : (
        <div className="w-full  h-full">
         <ToggleView key = {tenantid}/>
        </div>
      )}
      </div>
    </>
  );
};

export default UserProfile;
