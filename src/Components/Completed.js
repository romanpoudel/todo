import React from "react";
import { useState,useEffect} from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const getLocalItems = () => {
  let list = localStorage.getItem("done");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function Completed() {
  const [list, setList] = useState(getLocalItems);

  const handleClick = (index) => {
    const remainingList = list.filter((item, i) => {
      return i !== index;
    });
    setList(remainingList);
  };
  useEffect(() => {
    localStorage.setItem("done", JSON.stringify(list));
  }, [list]);
  return (
    <div className="">
      <div className="flex flex-col items-center  display space-y-3 bg-gray-300  rounded-md m-6 p-6">
        <div className="font-bold">
          <p>Completed Tasks</p>
        </div>
        {list.map((item, index) => (
          <div className="flex justify-between p-2 w-full bg-gray-600 rounded-lg border-black text-white">
            <div>
              <p>{item}</p>
            </div>
            <div>
              <button onClick={() => handleClick(index)}>
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Completed;
