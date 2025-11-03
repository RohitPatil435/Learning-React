import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=15')
    setUserData(response.data)
  };

  useEffect(function(){
    getData()
  },[])

  let printUserData = <h3 className="text-gray-400 text-xs">No data</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url} target="_blank">
          <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
          <img className="h-full w-full object-cover " src={elem.download_url} alt="" />
        </div>
        <h2 className="font-bold text-lg">{elem.author}</h2>
        </a>
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

      <div className="flex flex-wrap p-4 gap-3">
        {printUserData}
      </div>

    </div>
  );
};

export default App;
