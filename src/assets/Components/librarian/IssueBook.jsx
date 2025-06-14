import React, { useState, useEffect } from "react";
import TitleSearchBar from "../TitleSearchBar";
import IssueBookModal from "./IssueBookModal";
import axios from "axios";
import { logout, url } from "../../values";

function IssueBook() {
  const [tableData, setTableData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [bookData, setBookData] = useState(undefined);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function refreshData() {
      try {
        const response = await axios.get(`${url}/books/available`, {
          withCredentials: true
        });

        if (response.status === 200) {
          setTableData(response.data.data);
        } else if (response.status === 401) {
          console.log("Logging out from try");
          await logout();
        }
      } catch (error) {
        if (error.response?.status === 401) {
          console.log("Logging out from catch");
          await logout();
        } else {
          console.error("Fetch failed", error);
        }
      }
    }

    refreshData();
  }, []);
  



  return (
    <div className="w-100 py-3 px-5">
      <TitleSearchBar
        title="Available Books"
        input={searchInput}
        setInput={setSearchInput}
        onSearch={(value) => {
          console.log(value);
        }}
      />
      {tableData.length > 0 && (
        <table className="w-full table mt-2 table-bordered table-hover">
          <thead>
            <tr className="text-center">
              <th>Sr.No</th>
              <th>Name</th>
              <th>BookID</th>
              <th>Author</th>
              <th>Available Copies</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => {
              if (
                searchInput === "" ||
                item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                item.bookId.toLowerCase().includes(searchInput.toLowerCase()) ||
                item.author.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.bookId}</td>
                    <td>{item.author}</td>
                    <td>{item.copies}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          setShowModal(true);
                          setBookData(item);
                        }}>
                        Issue Book
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      )}
      {showModal && (
        <IssueBookModal
          onClose={() => {
            setShowModal(false);
          }}
          bookData={bookData}
        />
      )}
    </div>
  );
}

export default IssueBook;
