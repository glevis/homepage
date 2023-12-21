import Navbar from "../components/Navbar.jsx"
import { Outlet } from "react-router-dom"

export default function Root() {
  return (
    <>
      <div className="w-screen max-w-screen min-h-screen grid bg-slate-900">
        <Navbar/>
        <Outlet/>
      </div>
    </>
  );
}
