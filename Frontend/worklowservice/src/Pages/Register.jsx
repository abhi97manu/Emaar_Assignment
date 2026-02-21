import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useGetApiCall } from "../Utills/useGetApiCall";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const server_url = import.meta.env.VITE_SERVER_URL;
const Register = () => {
  const { data, error } = useGetApiCall("api/tenantList");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  
    try {
      const response = await axios.post(`${server_url}api/register`, data);
      if (response) {
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      alert(error.response?.data?.message)
     // console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-full border-3 items-center flex flex-col justify-center">
        <h1>Register Form</h1>
        <form class="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              {...register("email", { required: true })}
            />
            <label
              for="floating_email"
              class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email address
            </label>
            {errors.email && (
              <span className="text-sm text-red-400">This is required</span>
            )}
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              {...register("password", { required: true })}
            />
            <label
              for="floating_password"
              class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Password
            </label>
            {errors.password && (
              <span className="text-sm text-red-400">This is required</span>
            )}
          </div>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                {...register("firstname", { required: true })}
              />
              <label
                for="floating_first_name"
                class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                First name
              </label>
              {errors.firstname && (
                <span className="text-sm text-red-400">This is required</span>
              )}
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                {...register("lastname", { required: true })}
              />
              <label
                for="floating_last_name"
                class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Last name
              </label>
              {errors.lastname && (
                <span className="text-sm text-red-400">This is required</span>
              )}
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              {data ? (
                data.data.map((value) => {
                  return (
                    <>
                      <input
                        type="checkbox"
                        name={`${value.tenant_id}`}
                        value={`${value.tenant_id}`}
                        id={`${value.tenant_id}`}
                        {...register("company")}
                      />
                      <label for={`${value.tenant_id}`}>{value.name}</label>
                    </>
                  );
                })
              ) : (
                <label>No Companies</label>
              )}
            </div>
          </div>
          <button
            type="submit"
            class="text-white w-48  border border-2 p-2 rounded-lg bg-blue-500 hover:font-bold"
          >
            {loading ? (
              <div className="w-full flex items-center justify-center">
                <svg width={32} height={32} viewBox="0 0 50 50">
                  <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke="blue"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="90 150"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      repeatCount="indefinite"
                      dur="1s"
                      values="0 25 25;360 25 25"
                    />
                  </circle>
                </svg>
              </div>
            ) : (
              <p>Submit</p>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
