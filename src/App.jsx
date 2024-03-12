import Sidebar from "./Components/Sidebar";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="parent-container">
        <div className="left-container">
          <Sidebar />
        </div>
        <div className="middle-container">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
