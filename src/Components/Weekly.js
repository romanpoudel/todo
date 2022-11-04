import React from "react";
import { useState,useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const getLocalItems = () => {
  let list = localStorage.getItem("weekly");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
const getDoneItems = () => {
  let list = localStorage.getItem("done");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
function Weekly() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState(getLocalItems);
  const [done, setDone] = useState(getDoneItems);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (!message) {
      } else {
        event.preventDefault();
        console.log("value is:", message);
        setList((current) => [...current, message]);
        setMessage("");
      }
    }
  };
  const handleTick = (index) => {
    let tick = list.filter((item, i) => {
      return i === index;
    });

    console.log(tick);
    setDone(done.concat(tick));
    handleDelete(index);
    
  };
  useEffect(() => {
    localStorage.setItem("done", JSON.stringify(done));
  }, [done]);

  const handleDelete = (index) => {
    const remainingList = list.filter((item, i) => {
      return i !== index;
    });
    setList(remainingList);
  };
  useEffect(() => {
    localStorage.setItem("weekly", JSON.stringify(list));
  }, [list]);
  return (
    <div className="">
        
      <div className="Input">
        <input
          className="w-4/5 p-3 border-2 outline-none rounded-lg border-gray-600"
          type="text"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="flex flex-col items-center  display space-y-3 bg-gray-300  rounded-md m-6 p-6">
        <div className="font-bold">
          <p>Tasks</p>
        </div>
        {list.map((item, index) => (
          <div className="flex justify-between p-2 w-full bg-gray-600 rounded-lg border-black text-white">
            <div>
              <p>{item}</p>
            </div>
            <div>
              <button onClick={() => handleTick(index)}>
                <CheckCircleOutlineIcon />
              </button>
              <button onClick={() => handleDelete(index)}>
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weekly;
