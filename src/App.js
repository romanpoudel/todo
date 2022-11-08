import "./App.css";
import Navbar from "./Components/Navbar";


function App() {


  return (
    <div className="App flex flex-col m-10 p-10 align-center border-4 rounded-md justify-center">
      <div className="tag">
        <h4 className="font-bold text-3xl mb-4 ">To-Do</h4>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
