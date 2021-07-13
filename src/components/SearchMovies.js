import React from "react";
import { useState } from "react";

export default function SearchMovies({ setSearchData }) {

  function getSearchData(event) {
    const value = event.target.value;

    if (value.trim()) {
      setSearchData(value);
    }
  }

  return (
    <form action="">
      <input
        type="text"
        placeholder="search movies"
        onInput={getSearchData}
      />
    </form>
  );
}


