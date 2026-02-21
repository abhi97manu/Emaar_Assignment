import React, { useContext, useEffect } from "react";
import { useGetApiCall } from "../Utills/useGetApiCall";
import { Outlet, NavLink, useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/ContextAPi";
import axios from "axios";

const server_url = import.meta.env.VITE_SERVER_URL;
const Dashboard = () => {
  const { setTenantId } = useContext(AppContext);
  const { data, error } = useGetApiCall("user/userProfile");
  const tenantList = data?.data?.tenant_id;
  const { tenantId } = useParams();
  const emp_data = data?.data;
  const navigate = useNavigate();
  console.log(data);
  if (emp_data) {
    localStorage.setItem(
      "MyUser",
      JSON.stringify({
        email: emp_data.email,
        firstname: emp_data.firstname,
        lastname: emp_data.lastname,
      }),
    );
  }

  if (error) {
    alert(error.response.data.message);
  }

  async function logout() {
    console.log("click")
    try {
      await axios.post(
        `${server_url}user/logout`,
        {},
        { withCredentials: true },
      );

      localStorage.removeItem("user");

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-5 text-2xl font-bold border-b border-gray-700">
          MyApp
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <h1 className="text=xl font-bold"> Tenant List</h1>
          {tenantList &&
            tenantList.map((tenant) => {
              return (
                <NavLink
                  to={`/dashboard/tenantRegister/${tenant}`}
                  key={`${tenant}`}
                  className="block border px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => {
                    setTenantId(tenant);
                  }}
                >
                  {tenant}
                </NavLink>
              );
            })}
        </nav>

        <div className="p-4 border-t hover:cursor-pointer border-gray-700" onClick={() => logout()}>
          Logout
        </div>
      </aside>

      {/* Right section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">{emp_data?.firstname}</h1>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
          </div>
        </header>

        {/* Main content */}
        <main className="flex h-full p-6 ">
          <Outlet key={tenantId} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
