import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { usePostApiCallWithTenant } from "../Utills/useGetApiCall";
import { AppContext } from "../Context/ContextAPi";

const server_url = import.meta.env.VITE_SERVER_URL;

const RegistToTenant = () => {
  const { tenantid } = useContext(AppContext);
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const extra_data = localStorage.getItem("MyUser");
    const parsed = JSON.parse(extra_data);
    const mergedData = { ...parsed, ...data };

    try {
      const response = await axios.post(`${server_url}tenant/register`,mergedData,{withCredentials:true, headers: {
          'tenant-id': tenantid
        }});
    
        console.log(response)
    } catch (err) {
      console.log("error ",err);
    }
  };

  return (
    <div className="w-full p-4 flex flex-col items-center border rounded-lg shadow space-y-3">
      <h1 className="text-xl font-semibold underline">Register To your Tenant</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
       
        <input
          type="number"
          placeholder="Employee ID"
          className="w-full border rounded px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          {...register("empId", { required: true })}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white text-sm py-1.5 rounded hover:bg-blue-700 active:scale-95 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistToTenant;
