import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const server_url = import.meta.env.VITE_SERVER_URL;
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
   

    try {
      const response = await axios.post(`${server_url}user/login`, data, {
        withCredentials: true,
      });
      console.log(response);
      if (response.status === 200) {
       
        navigate("/dashboard");
      }
    } catch (error) {
     alert(error.response?.data?.message)
      console.log(error);
    }
  };

  return (
    <>
      <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
          <h2 class="text-2xl font-bold text-center mb-6">Login</h2>

          <form class="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register("email", { required: true })}
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register("password", { required: true })}
              />
            </div>


            <button
              type="submit"
              class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
