import React from "react";

const getLocalItems = () => {
  let list1 = JSON.parse(localStorage.getItem("daily"));
  let list2 = JSON.parse(localStorage.getItem("weekly"));
  let list3 = JSON.parse(localStorage.getItem("monthly"));

  let list = list1.concat(list2, list3);
  console.log(list);
  if (list) {
    return list;
  } else {
    return [];
  }
};


function All() {
  
  const list=getLocalItems()
  
  return (
    <div className="">
      <div className="flex flex-col items-center  display space-y-3 bg-gray-300  rounded-md m-6 p-6">
        <div className="font-bold">
          <p>Total Tasks</p>
        </div>
        {list.map((item, index) => (
          <div className="flex justify-between p-2 w-full bg-gray-600 rounded-lg border-black text-white">
            <div>
              <p>{item}</p>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default All;
