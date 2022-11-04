import "./App.css";
// import { useState } from "react";
// import DeleteIcon from '@mui/icons-material/Delete';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Navbar from "./Components/Navbar";

function App() {
  // const [message, setMessage] = useState("");
  // const [list, setList] = useState([]);

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     if (!message) {
  //     } else {
  //       event.preventDefault();
  //       console.log("value is:", message);
  //       setList((current) => [...current, message]);
  //       setMessage("");
  //     }
  //   }
  // };
  // console.log(list);

  // const handleClick = (index) => {
  //   const remainingList = list.filter((item, i) => {
  //     return i !== index;
  //   });
  //   setList(remainingList);
  // };

  return (
    <div className="App flex flex-col m-10 p-10 align-center border-4 rounded-md justify-center">
      <div className="tag">
        <h4 className="font-bold text-3xl mb-4 ">To-Do</h4>
      </div>
      <Navbar />
      {/* <div className="Input">
        <input
          className="w-4/5 p-3 border-2 outline-none rounded-lg border-gray-600"
          type="text"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          onKeyDown={handleKeyDown}
        />
      </div> */}
      {/* <div className="flex flex-col items-center  display space-y-3 bg-gray-300  rounded-md m-6 p-6">
        <div className="font-bold">
          <p>Tasks</p>
        </div>
        {list.map((item, index) => (
          <div className="flex justify-between p-2 w-full bg-gray-600 rounded-lg border-black text-white">
            <div>
              <p>{item}</p>
            </div>
            <div>
            <button onClick={()=>handleClick(index)}><CheckCircleOutlineIcon /></button>
              <button onClick={()=>handleClick(index)}><DeleteIcon /></button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;
