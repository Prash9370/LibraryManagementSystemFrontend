import React, { useState } from "react";
import { url } from "../../values";
import axios from "axios";

function IssueBookModal({ bookData, onClose }) {
  const [book, setBook] = useState({ ...bookData, receiverID: null });

  const [verified, setVerified] = useState(false);
  const [status, setStatus] = useState();

  async function checkStatus() {
    const response = await axios.get(`${url}/checkstatus/${book.receiverID}`);
    if (response.data.status) {
      setVerified(response.data.data);
      // setVerified(true);
      setStatus(response.data.message);
    } else {
      setStatus(response.data.message);
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
            <h3 className="modal-title text-center">Book Issue</h3>
            <button
              type="button"
              className="close btn btn-sm"
              style={{ transform: "scale(2)" }}
              onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <div>
              <strong>Book Name: </strong>
              {book.name}
            </div>
            <div>
              <strong>Book ID: </strong>
              {book.bookId}
            </div>
            <div>
              <strong>Author: </strong>
              {book.author}
            </div>

            <div className="d-flex align-items-center mt-3">
              <label htmlFor="receiverId" className="me-2">
                <strong>Receiver ID: </strong>
              </label>
              <input
                type="text"
                className="form-control w-50 me-2"
                id="receiverId"
                value={book.receiverID || ""}
                onChange={(e) => {
                  setBook((prev) => ({ ...prev, receiverID: e.target.value }));
                }}
              />
              <button className="btn btn-primary" onClick={checkStatus}>
                Verify
              </button>
            </div>

            <div
              className={`status text-center mt-2 ${
                verified ? "text-success" : "text-danger"
              }`}>
              {status}
            </div>
          </div>

          {verified && (
            <div className="modal-footer">
              <button className="btn btn-success">Issue Book</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IssueBookModal;
