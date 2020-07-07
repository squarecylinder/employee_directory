import React from "react";
import "../styles/SearchBox.css";

function SearchBox({ handleSearchChange }) {
    return (
      <div className="searchbox">
        <form className="form-inline">
         {/* this will be the input box for the searchbox */}
         <input
          className="form-control"
          type="search"
          placeholder="search"
          aria-label="search"
          onChange={(event) => handleSearchChange(event)} 
         />
        </form>
      </div>
    );
  }
  export default SearchBox;
  