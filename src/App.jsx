import Sidebar from "./Components/Sidebar";
import "./App.css";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import Table from "./Components/Table";

function App() {
  return (
    <>
      <div className="parent-container">
        <div className="left-container">
          <Sidebar />
        </div>
        <div className="middle-container">
          <Navbar />
          <Menu />\
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;
