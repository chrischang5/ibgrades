import "./App.css";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import React from "react";
import Display from "./components/Display";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState({});

  // Wrapper functions for updating App state

  const updateData = (data) => {
    setData(data);
  };

  // JSX. Pass in wrapper functions to update App state
  return (
    <div className="App">
      <Header></Header>
      <SearchBar updateData={updateData}></SearchBar>
      <Display data={data}></Display>
    </div>
  );
}

export default App;
