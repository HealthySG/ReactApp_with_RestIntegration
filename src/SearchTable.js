import React, { useEffect, useState} from "react";

const SearchTable= (searhTerm) => {
      return (
      <input
      type="text"
      placeholder="Input Status to Filter Results"
      className="form-control"
      style={{marginBottom: 20, width: "20%" }} I
      onChange = {(e)=>{
      this.props.searchTerm=e.target.value;
      }
    }/>
    )
  };
  export default SearchTable;