import Sidebar from "./Components/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <div className="parent-container">
        <div className="left-container">
          <Sidebar />
        </div>
        <div className="middle-conatiner"></div>
      </div>
    </>
  );
}

export default App;
