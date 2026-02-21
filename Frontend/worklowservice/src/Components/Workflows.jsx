import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const server_url = import.meta.env.VITE_SERVER_URL;
const Workflows = ({ value }) => {

  
  const { tenantId } = useParams();
  async function startTransition() {
    console.log("clicked")
    try {
     await axios.post(
        `${server_url}tenant/createTask`,
        value,
        {
          withCredentials: true,
          headers: {
            "tenant-id": tenantId,
          },
        },
      );

    } catch (err) {
      alert(err)
      console.log("Caught err", err);
    }
  }




  return (
    
      <button
        onClick={() => startTransition()}
        key={value.id}
        className="px-4 py-2 bg-blue-500 active:scale-95 text-white rounded"
      >
        {value.workflow_name}
      </button>
   
  );
};

export default Workflows;
