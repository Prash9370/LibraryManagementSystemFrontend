import React, { useState } from "react";

function TitleSearchBar({ title, input, onSearch }) {
  const [search, setSearch] = useState("");
  return (
    <div className="d-flex flex-row justify-content-between w-100">
      <div>{title}</div>
      <div className="d-flex flex-row justify-space-evenly">
        <input
          type="text"
          placeholder="Search Books"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="form-control me-2"
        />
        <button className="btn btn-danger"> Search </button>
      </div>
    </div>
  );
}

export default TitleSearchBar;
