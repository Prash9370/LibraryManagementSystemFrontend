import React, { useEffect, useState } from "react";
import TitleSearchBarCustom from "../TitleSearchBarCustom";
import axios from "axios";
import { url } from "../../values";
import Button from "../UI/Button";
import AddBookModal from "./AddBookModal";

function Inventory() {
  const [searchInput, setSearchInput] = useState("");
  const [inventoryData, setInventoryData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setInventoryData([
      {
        name: "The Hobbit",
        bookId: "B1001",
        author: "J.R.R. Tolkien",
        publication: "George Allen & Unwin",
        totalCopies: 10,
        copies: 4,
        genre: "Fantasy"
      },
      {
        name: "The Catcher in the Rye",
        bookId: "B1002",
        author: "J.D. Salinger",
        publication: "Little, Brown and Company",
        totalCopies: 8,
        copies: 2,
        genre: "Classic"
      },
      {
        name: "Sapiens: A Brief History of Humankind",
        bookId: "B1003",
        author: "Yuval Noah Harari",
        publication: "Harper",
        totalCopies: 5,
        copies: 5,
        genre: "Non-fiction"
      },
      {
        name: "Clean Code",
        bookId: "B1004",
        author: "Robert C. Martin",
        publication: "Prentice Hall",
        totalCopies: 6,
        copies: 1,
        genre: "Programming"
      }
    ]);
    refreshData();
  }, []);

  async function refreshData() {
    const response = await axios.get(`${url}/allbooks`);
    if (response.data.status) {
      setInventoryData(response.data.data);
    } else {
      alert("Error fetching response");
    }
  }
  const MyButton = () => <Button text="Add Book" color="success" onClick={()=>{setModalVisible(true)}}/>;

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
                      <button className="btn btn-warning mb-1">Update</button>
                      <button className="btn btn-danger">Delete</button>
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
          }}
        />
      )}
    </div>
  );
}

export default Inventory;
