import React from "react";

function TitleSearchBar({ title, input, setInput, onSearch }) {

  return (
    <div className="d-flex flex-row justify-content-between w-100 align-items-center">
      <h5>{title}</h5>
      <div className="d-flex flex-row justify-space-evenly">
        <input
          type="text"
          placeholder="Search Books"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="form-control me-2"
        />
        <button className="btn btn-danger" onClick={()=>{onSearch(input)}}> Search </button>
      </div>
    </div>
  );
}

export default TitleSearchBar;
