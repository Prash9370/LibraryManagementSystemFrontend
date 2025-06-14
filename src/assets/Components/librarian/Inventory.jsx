import React, { useEffect, useState } from "react";
import TitleSearchBarCustom from "../TitleSearchBarCustom";
import axios from "axios";
import { logout, url } from "../../values";
import Button from "../UI/Button";
import AddBookModal from "./AddBookModal";
import UpdateModal from "./UpdateModal";

function Inventory() {
  const [searchInput, setSearchInput] = useState("");
  const [inventoryData, setInventoryData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [updatingBook, setUpdatingBook] = useState({});

  useEffect(() => {
    refreshData();
  }, []);

  async function refreshData() {
    const response = await axios.get(`${url}/books/all`);
    if (response.data.status) {
      setInventoryData(response.data.data);
    } else {
      alert("Error fetching response");
    }
  }
  const MyButton = () => (
    <Button
      text="Add Book"
      color="success"
      onClick={() => {
        setModalVisible(true);
      }}
    />
  );

  async function deleteBook(bookId) {
    try {
      const response = await axios.delete(`${url}/books/delete/${bookId}`, {
        withCredentials: true
      });
      if (response.status == 200) {
        alert("Book Deleted Successfully");
        refreshData();
      } else {
        alert("Some error occurred");
      }
    } catch (error) {
      if (error.response?.status == 401) {
        alert("Login through valid credentials");
        await logout();
      } else {
        alert("Some error occurred");
      }
    }
  }

  function updateBook(book) {
    setUpdatingBook(book);
    setUpdateModalVisible(true);
  }

  return (
    <div className="w-100 py-3 px-5">
      <TitleSearchBarCustom
        title="All Books"
        input={searchInput}
        setInput={setSearchInput}
        onSearch={(value) => {
          console.log(value);
        }}
        CustomElement={MyButton}
      />
      {inventoryData.length > 0 && (
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <td>Sr. No</td>
              <td>Book Name</td>
              <td>Book ID</td>
              <td>Author</td>
              <td>Publication</td>
              <td>Total Copies</td>
              <td>Available Copies</td>
              <td>Genre</td>
              <td>Actions</td>
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
                    <td>{value.bookId}</td>
                    <td>{value.author}</td>
                    <td>{value.publication}</td>
                    <td>{value.totalCopies}</td>
                    <td>{value.copies}</td>
                    <td>{value.genre}</td>
                    <td className="d-flex flex-column justify-content-evenly">
                      <button className="btn btn-warning mb-1" onClick={()=>{updateBook(value)}}>Update</button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteBook(value.bookId);
                        }}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      )}
      {modalVisible && (
        <AddBookModal
          onClose={() => {
            setModalVisible(false);
            refreshData();
          }}
        />
      )}
      {updateModalVisible && (
        <UpdateModal
        bookData = {updatingBook}
          onClose={() => {
            setUpdateModalVisible(false);
            refreshData();
          }}
        />
      )}
    </div>
  );
}

export default Inventory;
