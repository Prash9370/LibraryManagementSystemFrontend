import axios from "axios";
import React, { useEffect, useState } from "react";
import { logout, url, userData } from "../../values";

function Dashboard() {
  const [info, setInfo] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  async function fetchData() {
    setInfo(userData || { name: "" });
    const response = await axios.get(`${url}/transactions/${userData.email}`, {
      withCredentials: true
    });
    if (response.status === 401) {
      await logout();
    } else if (response.status == 200) {
      if (response.data.status) {
        setTransactions(response.data.data);
      } else {
        alert(response.data.message);
      }
    } else {
      alert(response.data.message);
    }
  }
  return (
    <div className="w-100 m-4">
      <div className="personal border mb-4 ps-5 py-2">
        <h3>{info.name}</h3>
        <p>{info.role}</p>
        <p>{info.email}</p>
      </div>
      <div className="transactions">
        <h4>Transactions</h4>
        {transactions.length > 0 && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>Sr.No</td>
                <td>Trans ID</td>
                <td>Book Name</td>
                <td>Issued On</td>
                <td>Returned On</td>
                <td>Penalty</td>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trans, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{trans.transId}</td>
                    <td>{trans.bookName}</td>
                    <td>{trans.issuedDate}</td>
                    <td
                      className={`${
                        trans.returnedDate ? null : "text-danger"
                      }`}>
                      {trans.returnedDate || "Not returned yet"}
                    </td>
                    <td>
                      {trans.penalty ? "Rs." + trans.penaltyAmount : "N/A"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
