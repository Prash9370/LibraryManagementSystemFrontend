import React from "react";

function TitleSearchBarCustom({ title, input, setInput, onSearch, CustomElement }) {

  return (
    <div className="d-flex flex-row justify-content-between w-100 align-items-center">
      <h5>{title}</h5>
      {CustomElement && <CustomElement />}
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
        <button
          className="btn btn-danger"
          onClick={() => {
            onSearch(input);
          }}>
          {" "}
          Search{" "}
        </button>
      </div>
    </div>
  );
}

export default TitleSearchBarCustom;
