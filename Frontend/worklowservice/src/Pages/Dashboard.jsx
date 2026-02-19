import React, { useContext } from 'react'
import { useGetApiCall } from '../Utills/useGetApiCall';
import { Outlet, NavLink } from 'react-router-dom';
import { AppContext } from '../Context/ContextAPi';

const Dashboard = () => {
  const {setTenantId} = useContext(AppContext)
    const {data}= useGetApiCall('user/userProfile')
    const tenantList = data?.data?.tenant_id
   const cookie = document.cookie;
    console.log(cookie, "tenant token from dashboard");
  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-5 text-2xl font-bold border-b border-gray-700">
          MyApp
        </div>

        <nav className="flex-1 p-4 space-y-2">
            { tenantList && tenantList.map((tenant) => {
                return (
                    <NavLink to =  {`/dashboard/tenantRegister/${tenant}`} key = {`${tenant}`} className="block px-4 py-2 rounded hover:bg-gray-700"
                    onClick={()=>{setTenantId(tenant)}}
                    >
                        {tenant}
                        </NavLink>
                )
            })
            }

        </nav>

        <div className="p-4 border-t border-gray-700">Logout</div>
      </aside>

      {/* Right section */}
      <div className="flex-1 flex flex-col">
        
        {/* Navbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-1 rounded"
            />
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">
                <Outlet/>
        </main>

      </div>
    </div>
  );
}

export default Dashboard