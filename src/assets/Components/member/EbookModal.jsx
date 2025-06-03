import React, { useEffect } from 'react'

function EbookModal({book, onClose}) {

  useEffect(() => {console.log(book)}, [book])
  return (
    <div className="position-fixed top-0 start-0 w-100">
      <div
        className="text-end px-3 cursor-pointer bg-dark"
        onClick={() => {
          onClose();
        }}>
        <i class="bi bi-x-square bg-light"></i>
      </div>
      <iframe
        src={book}
        title="Ebook PDF"
        width="100%"
        height="600px"
        style={{ border: "none" }}
      />
    </div>
  );
}

export default EbookModal