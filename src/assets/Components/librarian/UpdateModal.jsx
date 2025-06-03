import axios from "axios";
import React, { useState } from "react";
import { logout, url } from "../../values";

function UpdateModal({ bookData, onClose }) {
  const [book, setBook] = useState(bookData);

  function handleChange(name, value) {
    setBook((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit() {
    Object.keys(book).forEach((key) => {
      if (book[key] === "" || book[key] === 0) {
        alert(key + " value is mandatory");
        return;
      }
    });

    const response = await axios.post(url + "/books/update", book, {
      withCredentials: true
    });
    try {
      if (response.status === 200) {
        alert("Book Updated Successfully");
        onClose();
      }
    } catch (e) {
      console.log(e);
      if (response.status == 401) {
        await logout();
        onClose();
      }
    }
  }

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-3 bg-smooth">
          <div className="modal-header w-full d-flex justify-content-between">
            <h3 className="modal-title text-center">Update Book</h3>
            <button
              type="button"
              className="close btn btn-sm"
              style={{ transform: "scale(2)" }}
              onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <div className="d-flex align-items-center mt-3">
              <label htmlFor="name" className="me-2">
                <strong>Book Name: </strong>
              </label>
              <input
                type="text"
                className="form-control w-50 me-2"
                id="name"
                value={book.name}
                onChange={(e) => {
                  handleChange("name", e.target.value);
                }}
              />
            </div>
            <div className="d-flex align-items-center mt-3">
              <label htmlFor="author" className="me-2">
                <strong>Book Author: </strong>
              </label>
              <input
                type="text"
                className="form-control w-50 me-2"
                id="author"
                value={book.author}
                onChange={(e) => {
                  handleChange("author", e.target.value);
                }}
              />
            </div>
            <div className="d-flex align-items-center mt-3">
              <label htmlFor="publication" className="me-2">
                <strong>Book Publication: </strong>
              </label>
              <input
                type="text"
                className="form-control w-50 me-2"
                id="publication"
                value={book.publication}
                onChange={(e) => {
                  handleChange("publication", e.target.value);
                }}
              />
            </div>
            <div className="d-flex align-items-center mt-3">
              <label htmlFor="copies" className="me-2">
                <strong>Total Copies: </strong>
              </label>
              <input
                type="number"
                className="form-control w-50 me-2"
                id="copies"
                value={book.totalCopies}
                onChange={(e) => {
                  handleChange("totalCopies", e.target.value);
                }}
              />
            </div>
            <div className="d-flex align-items-center mt-3">
              <label htmlFor="copies" className="me-2">
                <strong>Available Copies: </strong>
              </label>
              <input
                type="number"
                className="form-control w-50 me-2"
                id="copies"
                value={book.copies}
                onChange={(e) => {
                  handleChange("copies", e.target.value);
                }}
              />
            </div>
            <div className="d-flex align-items-center mt-3">
              <label htmlFor="genre" className="me-2">
                <strong>Book Genre: </strong>
              </label>
              <select
                id="genre"
                className="form-select w-50 me-2"
                value={book.genre}
                onChange={(e) => handleChange("genre", e.target.value)}>
                <option value="">Select a genre</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Biography">Biography</option>
                <option value="Technology">Technology</option>
              </select>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-success" onClick={handleSubmit}>
              Update Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
