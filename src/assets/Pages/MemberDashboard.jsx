import React, { useState } from "react";
import SidePanel from "../Components/SidePanel";
import TitleBar from "../Components/TitleBar";
import Dashboard from "../Components/member/Dashboard";
import AvailableBooks from "../Components/member/AvailableBooks";
import Ebooks from "../Components/member/Ebooks";

function MemberDashboard() {
  const [activeComponent, setActiveElement] = useState("dashboard");
  const panelData = [
    { title: "DashBoard", element: "dashboard" },
    { title: "Available Books", element: "availablebooks" },
    { title: "E-Book", element: "ebooks" }
    // { title: "Inventory", element: "inventory" },
    // { title: "Transactions", element: "transactions" },
    // { title: "Reports", element: "reports" }
  ];
  return (
    <div className="w-100 h-screen">
      <TitleBar title="User Dashboard" />
      <div className="d-flex flex-row h-screen min-vh-100">
        <SidePanel panelData={panelData} setActiveElement={setActiveElement} />
        {activeComponent == "dashboard" && <Dashboard/>}
        {activeComponent == "availablebooks" && <AvailableBooks/>}
        {activeComponent == "ebooks" && <Ebooks/>}
      </div>
    </div>
  );
}

export default MemberDashboard;
