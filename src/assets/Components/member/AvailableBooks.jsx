import React, { useState, useEffect } from "react";
import TitleSearchBar from "../TitleSearchBar";
import axios from "axios";
import { logout, url } from "../../values";


function AvailableBooks() {
  const [tableData, setTableData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function refreshData() {
      try{
        const response = await axios.get(url+"/books/available",{withCredentials: true});
        if(response.status === 200){
          setTableData(response.data.data);
        }
      }catch(error){
        if(error.response?.status == 401){
          alert("Login using valid credentials");
          await logout();
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

export default AvailableBooks;
