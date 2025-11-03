import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Buttons from "./components/Buttons";

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=9`)
    setUserData(response.data)
  };

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className="text-gray-300 font-semibold text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    });
  }

  return (
    <div className="bg-black h-screen p-5 text-white overflow-auto">
    
      {/* <button
        onClick={getData}
        className="bg-green-600 active:scale-95 text-white px-5 py-2 rounded"
      >
        Get data
      </button> */}

      <div className="flex h-[90%] flex-wrap p-4 gap-3">
        {printUserData}
      </div>
 
        <div>
          <Buttons  index={index} setIndex={setIndex} setUserData={setUserData} />
        </div>
       
    </div>
  );
};

export default App;
