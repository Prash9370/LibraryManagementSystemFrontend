import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Login from "./assets/Pages/Login";
import LibrarianDashboard from "./assets/Pages/LibrarianDashboard";
import MemberDashboard from "./assets/Pages/MemberDashboard";
import Dashboard from "./assets/Pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/librarian" element={<LibrarianDashboard />} />
          <Route path="/member" element={<MemberDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
