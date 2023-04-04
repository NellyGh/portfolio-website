import Navbar from "../components/Navbar/Navbar";
import React from 'react'
import { Outlet } from "react-router-dom";

function HomeWrapper() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default HomeWrapper