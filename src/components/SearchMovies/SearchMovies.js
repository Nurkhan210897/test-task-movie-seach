import React from "react";
import TextField from "@material-ui/core/TextField";
import "./index.css";

export default function SearchMovies({ setSearchData }) {
  function getSearchData(event) {
    const value = event.target.value;

    if (value.trim()) {
      setSearchData(value);
    }
  }

  return (
    <div className="search_form">
      <form action="">
        <TextField
          id="standard-basic"
          label="search movies"
          onInput={getSearchData}
        />
      </form>
    </div>
  );
}
