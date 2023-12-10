import Navbar from "../components/Navbar.jsx"
import { Outlet } from "react-router-dom"

export default function Root() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-900" id="detail">
        <Outlet />
      </div>
    </>
  );
}
