import React, { useEffect, useState } from 'react'
import TitleSearchBar from '../TitleSearchBar'

function Transactions() {
  const [searchInput, setSearchInput] = useState("");
  const [transactions, setTransactions] = useState([]);

useEffect(() => {
  setTransactions([
    {
      transId: "TXN001",
      bookId: "B001",
      bookName: "The Alchemist",
      receiverId: "R1001",
      issuedDate: "2024-12-01",
      returnedDate: "2025-01-02",
      penalty: true,
      penaltyAmount: 50
    },
    {
      transId: "TXN002",
      bookId: "B002",
      bookName: "1984",
      receiverId: "R1002",
      issuedDate: "2025-02-10",
      returnedDate: null,
      penalty: false,
      penaltyAmount: 0
    },
    {
      transId: "TXN003",
      bookId: "B003",
      bookName: "Sapiens",
      receiverId: "R1003",
      issuedDate: "2025-03-15",
      returnedDate: "2025-04-01",
      penalty: true,
      penaltyAmount: 30
    },
    {
      transId: "TXN004",
      bookId: "B004",
      bookName: "Clean Code",
      receiverId: "R1004",
      issuedDate: "2025-04-05",
      returnedDate: "2025-04-20",
      penalty: false,
      penaltyAmount: 0
    },
    {
      transId: "TXN005",
      bookId: "B005",
      bookName: "Atomic Habits",
      receiverId: "R1005",
      issuedDate: "2025-05-01",
      returnedDate: "2025-05-16",
      penalty: true,
      penaltyAmount: 20
    }
  ]);
},[])

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

      {
        transactions.length > 0 && (
          <table className="table table-bordered">
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
              {
                transactions.map((trans, index)=>{
                  return (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{trans.transId}</td>
                      <td>{trans.bookId}</td>
                      <td>{trans.bookName}</td>
                      <td>{trans.receiverId}</td>
                      <td>{trans.issuedDate}</td>
                      <td className={`${trans.returnedDate?null:"text-danger"}`}>{trans.returnedDate || "Not returned yet"}</td>
                      <td>{trans.penalty?"Rs." +trans.penaltyAmount:"N/A"}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        )
      }

    </div>
  );
}

export default Transactions