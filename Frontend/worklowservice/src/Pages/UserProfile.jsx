import React, { useEffect, useState } from "react";
import { useGetApiCallWithTenant } from "../Utills/useGetApiCall";
import { useContext } from "react";
import { AppContext } from "../Context/ContextAPi";

import YourTasks from "./YourTasks";
import ToggleView from "../Components/ToggleView";
import RegistToTenant from "./RegistToTenant";
import { useParams } from "react-router-dom";
import axios from "axios";
import Workflows from "../Components/Workflows";
const UserProfile = () => {
  const { tenantId } = useParams();
  const {userRole, setUserRole} = useContext(AppContext)

  const { data } = useGetApiCallWithTenant(`tenant/userDetails`, tenantId);

  const { data: workflow } = useGetApiCallWithTenant(
    `tenant/allworkflow`,
    tenantId,
  );

  

  const role = data?.role_id;
  setUserRole(role)
  const allowUser = data?.show;



  return (
    <>
    <div className="flex flex-col w-full gap-3">
      {!allowUser ? (<RegistToTenant key={tenantId} />):
      (
      <div className="w-full   bg-zinc-200">
        <div className="w-full gap-4 flex flex-col border-black border p-4">
          <h1 className="text-2xl font-bold "> Apply Task</h1>
          <div className="flex gap-2 w-full ">
            {workflow &&
              workflow.map((value) => {
                return (
                 <Workflows value={value} key={value.id}/>
                );
              })}
          </div>
          <div className="w-full  border-black">
            <h1 className="text-xl font-semibold">Pending Tasks</h1>
            {data && <YourTasks key={tenantId} />}
          </div>
        </div>
      </div>
      )
}





      {userRole === 104 && (
        <div className="w-full border border-black p-4 h-full">
          <ToggleView key={tenantId} />
        </div>
      )}
      </div>
    </>
  );
};

export default UserProfile;
