import Navbar from "../components/Navbar.jsx"
import { Outlet } from "react-router-dom"

export default function Root() {
  return (
    <>
      <div className="w-screen max-w-screen min-h-screen flex flex-col bg-slate-900">
        <Navbar/>
        <Outlet/>
      </div>
    </>
  );
}
