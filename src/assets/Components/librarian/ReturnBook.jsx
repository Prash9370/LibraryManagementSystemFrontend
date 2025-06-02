import React, { useState, useEffect } from "react";
import TitleSearchBar from "../TitleSearchBar";
import { url } from "../../values";
import axios from "axios";

function PayButton({ amount, entry }) {
  async function PayPenalty() {
    const response = await axios.post(`${url}/penalty`, {
      bookId: entry.bookId,
      receiverId: entry.receiverId,
      transactionId: entry.transactionId,
      amount
    });
    if (response.data.status) {
      alert(response.data.message);
    } else {
      alert(response.data.message);
    }
  }
  return (
    <button className="btn btn-danger" onClick={PayPenalty}>
      Pay
    </button>
  );
}

function ReturnButton({ refreshBookData, transactionId }) {
  async function Return() {
    const response = await axios.post(`${url}/returnbook`, {
      transactionId: transactionId
    });
    if (response.data.status) {
      alert(response.data.message);
      refreshBookData();
    } else {
      alert(response.data.message);
    }
  }

  return (
    <button className="btn btn-danger" onClick={Return}>
      Return
    </button>
  );
}

function ReturnBook() {
  const [searchInput, setSearchInput] = useState("");
  const [issuedBooksData, setIssuedBooksData] = useState([]);

  useEffect(() => {
    setIssuedBooksData([
      {
        name: "The Great Gatsby",
        bookId: "B001",
        receiverId: "U1001",
        issueDate: "2025-05-15",
        penalty: true,
        penaltyAmount: 25,
        transactionId: "T12345"
      },
      {
        name: "1984",
        bookId: "B002",
        receiverId: "U1002",
        issueDate: "2025-05-20",
        penalty: false,
        transactionId: "T12346"
      },
      {
        name: "To Kill a Mockingbird",
        bookId: "B003",
        receiverId: "U1003",
        issueDate: "2025-05-10",
        penalty: true,
        penaltyAmount: 10,
        transactionId: "T12347"
      },
      {
        name: "Brave New World",
        bookId: "B004",
        receiverId: "U1004",
        issueDate: "2025-05-22",
        penalty: false,
        transactionId: "T12348"
      }
    ]);
  }, []);

  async function refreshBookData() {
    const response = await axios.get(`${url}/issuedbooks`);
    if (response.data.status) {
      alert(response.data.message);
      setIssuedBooksData(response.data.data);
    } else {
      alert(response.data.message);
    }
  }
  return (
    <div className="w-100 p-3 px-5">
      <TitleSearchBar
        title="Issued Books"
        input={searchInput}
        setInput={setSearchInput}
        onSearch={(value) => {
          console.log(value);
        }}
      />
      {issuedBooksData.length > 0 && (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Book Name</th>
              <th>Book ID</th>
              <th>Issued To</th>
              <th>Issued On</th>
              <th>Penalty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {issuedBooksData.map((item, index) => {
              if (
                searchInput === "" ||
                item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                item.receiverId
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              ) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.bookId}</td>
                    <td>{item.receiverId}</td>
                    <td>{item.issueDate}</td>
                    <td className="d-flex align-items-center justify-content-evenly">
                      {item.penalty ? (
                        <>
                          <span>Rs.{item.penaltyAmount} </span>
                          <PayButton amount={item.penaltyAmount} entry={item} />
                        </>
                      ) : null}
                    </td>
                    <td>
                      {item.penalty ? null : (
                        <ReturnButton
                          refreshBookData={refreshBookData}
                          transactionId={item.transactionId}
                          setIssuedBooksData={setIssuedBooksData}
                        />
                      )}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ReturnBook;
