import React from "react";
import SidePanel from "../Components/SidePanel";
import TitleBar from "../Components/TitleBar";

function MemberDashboard() {
  const panelData = [
    { title: "Available Books", element: "availablebooks" },
    { title: "E-Book", element: "ebooks" }
    // { title: "Inventory", element: "inventory" },
    // { title: "Transactions", element: "transactions" },
    // { title: "Reports", element: "reports" }
  ];
  return (
    <div className="w-100 h-100">
      <TitleBar title="User Dashboard" />
      <SidePanel
        panelData={panelData}
        setActiveElement={(x) => console.log(x)}
      />
    </div>
  );
}

export default MemberDashboard;
