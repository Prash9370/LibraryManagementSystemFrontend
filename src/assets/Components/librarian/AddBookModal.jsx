import React from 'react'

function AddBookModal({onClose}) {
  

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-3 bg-smooth">
          <div className="modal-header w-full d-flex justify-content-between">
            <h3 className="modal-title text-center">Add Book</h3>
            <button
              type="button"
              className="close btn btn-sm"
              style={{ transform: "scale(2)" }}
              onClick={onClose}
              >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            
            <div className="d-flex align-items-center mt-3">
              <label htmlFor="receiverId" className="me-2">
                <strong>Receiver ID: </strong>
              </label>
              <input
                type="text"
                className="form-control w-50 me-2"
                id="receiverId"

                
              />
            </div>


          </div>


            <div className="modal-footer">
              <button className="btn btn-success">Add Book</button>
            </div>

        </div>
      </div>
    </div>
  );
}

export default AddBookModal