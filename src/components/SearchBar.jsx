import React from "react";

const SearchBar = ({ search, btnSearch }) => {
  return (
    <div>
      <label className="search-input-label">
        Search List:
        <input
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="Search"
          className="search-input"
          onChange={search}
        ></input>
      </label>
      <button className="search-btn" onClick={btnSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
