import React, { useState } from "react";
import SidePanel from "../Components/SidePanel";
import TitleBar from "../Components/TitleBar";
import IssueBook from "../Components/IssueBook";

function LibrarianDashboard() {
  const panelData = [
    { title: "Issue Book", element: "issuebook" },
    { title: "Return Book", element: "returnbook" },
    { title: "Inventory", element: "inventory" },
    { title: "Transactions", element: "transactions" },
    { title: "Reports", element: "reports" }
  ];

  const [activeComponent, setActiveElement] = useState("inventory");

  return (
    <div className="w-100 h-100">
      <TitleBar title="Librarian Dashboard" />
      <div className="d-flex flex-row h-100">
        <SidePanel panelData={panelData} setActiveElement={setActiveElement} />
        {activeComponent=="issuebook" && <IssueBook/>}
      </div>
    </div>
  );
}

export default LibrarianDashboard;
