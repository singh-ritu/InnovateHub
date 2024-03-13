import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import Table from "./Components/Table";
import { tableData } from "./utils/constants";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(tableData);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setData(tableData);
      return;
    }
    const filteredData = tableData.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setData(filteredData);
  };

  return (
    <>
      <div className="parent-container">
        <div className="left-container">
          <Sidebar />
        </div>
        <div className="middle-container">
          <Navbar searchTerm={searchTerm} handleChange={handleChange} />
          <Menu />
          <Table tableData={data} />
        </div>
      </div>
    </>
  );
}

export default App;
