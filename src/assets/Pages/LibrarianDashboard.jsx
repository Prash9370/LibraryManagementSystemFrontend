import React, { useState } from "react";
import SidePanel from "../Components/SidePanel";
import TitleBar from "../Components/TitleBar";
import IssueBook from "../Components/librarian/IssueBook";
import ReturnBook from "../Components/librarian/ReturnBook";
import Inventory from "../Components/librarian/Inventory";
import Transactions from "../Components/librarian/Transactions";
import Reports from "../Components/librarian/Reports";

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
    <div className="w-100 h-screen min-vh-100">
      <TitleBar title="Librarian Dashboard" />
      <div className="d-flex flex-row h-screen min-vh-100">
        <SidePanel panelData={panelData} setActiveElement={setActiveElement} />
        {activeComponent == "issuebook" && <IssueBook />}
        {activeComponent == "returnbook" && <ReturnBook />}
        {activeComponent == "inventory" && <Inventory />}
        {activeComponent == "transactions" && <Transactions />}
        {activeComponent == "reports" && <Reports />}
      </div>
    </div>
  );
}

export default LibrarianDashboard;
