import React, { useEffect, useState } from "react";
import TitleSearchBar from "../TitleSearchBar";
import axios from "axios";
import { logout, url } from "../../values";

function Transactions() {
  const [searchInput, setSearchInput] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(url + "/alltransactions", {
        withCredentials: true
      });
      if (response.status == 200) {
        if (response.data.status) {
          setTransactions(response.data.data);
        }
      }
    } catch (error) {
      if (error.response?.status == 401) {
        alert("Unauthorised Access Permission Requested");
        await logout();
      }
    }
  }

  return (
    <div className="h-screen w-100 py-3 px-5">
      <TitleSearchBar
        title="Transactions"
        input={searchInput}
        setInput={setSearchInput}
        onSearch={(value) => {
          console.log(value);
        }}
      />

      {transactions.length > 0 && (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <td>Sr.No</td>
              <td>Trans ID</td>
              <td>BookID</td>
              <td>Book Name</td>
              <td>Receiver ID</td>
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
                  <td>{trans.bookId}</td>
                  <td>{trans.bookName}</td>
                  <td>{trans.receiverId}</td>
                  <td>{trans.issuedDate}</td>
                  <td
                    className={`${trans.returnedDate ? null : "text-danger"}`}>
                    {trans.returnedDate || "Not returned yet"}
                  </td>
                  <td>{trans.penalty ? "Rs." + trans.penaltyAmount : "N/A"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Transactions;
