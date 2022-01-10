import "./App.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import React from "react";
import Display from "./Display";

function App() {
  const [searchParams, setSearchParams] = useState({});
  const [data, setData] = useState({});

  // Wrapper functions for updating App state
  const updateSearchParams = (searchParams) => {
    setSearchParams(searchParams);
  };

  const updateData = (data) => {
    setData(data);
  };

  // JSX. Pass in wrapper functions to update App state
  return (
    <div className="App">
      <SearchBar
        updateSearchParams={updateSearchParams}
        updateData={updateData}
      ></SearchBar>
      <p>
        {searchParams.subject} {searchParams.level} {searchParams.session}{" "}
        {searchParams.year}
      </p>
      <p>Number Candidates: {data["Candidates"]}</p>
      <Display data={data}></Display>
    </div>
  );
}

export default App;
