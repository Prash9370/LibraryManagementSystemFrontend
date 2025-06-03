import React, { useEffect, useState } from "react";
import TitleSearchBar from "../TitleSearchBar";
import axios from "axios";
import { logout,  url } from "../../values";
import EbookModal from "./EbookModal";

function Ebooks() {
  const [searchInput, setSearchInput] = useState("");
  const [inventoryData, setInventoryData] = useState([]);
  const [book, setBook] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    refreshData();
  }, []);

  async function refreshData() {
    const response = await axios.get(`${url}/ebooks/all`, {withCredentials:true});
    if (response.data.status) {
      setInventoryData(response.data.data);
    } else {
      alert("Error fetching response");
    }
  }

  async function readBook(bookId) {
    const response = await axios.get(`${url}/ebooks/${bookId}`, {
      withCredentials: true
    });
    if (response.status == 401) {
      await logout();
    } else if (response.status == 200) {
      if (response.data.status) {
        setBook(response.data.data);
      } else {
        alert(response.data.message);
      }
    } else {
      alert(response.data.message);
    }
    setModalVisible(true);
  }

  return (
    <div className="w-100 py-3 px-5">
      <TitleSearchBar
        title="E-Books Collection"
        input={searchInput}
        setInput={setSearchInput}
        onSearch={(value) => {
          console.log(value);
        }}
      />
      {inventoryData.length > 0 && (
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <td>Sr. No</td>
              <td>Book Name</td>
              <td>Author</td>
              <td>Publication</td>
              <td>Genre</td>
              <td>Read</td>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((value, index) => {
              if (
                searchInput === "" ||
                value.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                value.bookId
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                value.author
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                value.publication
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                value.genre.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value.name}</td>
                    <td>{value.author}</td>
                    <td>{value.publication}</td>
                    <td>{value.genre}</td>
                    <td className="d-flex flex-column justify-content-evenly">
                      <button
                        className="btn btn-warning mb-1"
                        onClick={() => {
                          readBook(value.bookId);
                          // readBook("book");
                        }}>
                        Read
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      )}
      {modalVisible && <EbookModal book={book} onClose={()=>{setModalVisible(false)}}/>}
    </div>
  );
}

export default Ebooks;
