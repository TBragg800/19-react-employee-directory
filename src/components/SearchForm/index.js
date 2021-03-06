import React from "react";

function SearchForm(props) {
  return (
    <form className="form-inline">
      <input className="form-control mr-sm-2" 
        name="search" 
        placeholder="Search"
        onChange={props.handleInputChange}
      />
    </form>
  );
}

export default SearchForm;
