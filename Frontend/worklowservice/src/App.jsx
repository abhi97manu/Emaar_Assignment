import { Outlet, RouterProvider } from "react-router-dom"
import Register from "./Pages/Register"
import Router from "./Routes/Rotues.jsx"


function App() {


  return (
    <>
        <div className="bg-blue-200 w-full h-screen">
           <RouterProvider router={Router}>
              <Outlet/>
              </RouterProvider>
        </div>
    </>
  )
}

export default App
