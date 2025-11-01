import React, { useState } from "react";

const App = () => {

  const [num, setnum] = useState(10);  // 4
  // const [num, setnum] = useState({user:'rohit',age:20});  // 1 ,3
  // const [num, setnum] = useState([10, 20, 30]); //2

  const btnClicked = () => {

    // update data 

    //1
    // const newNum={...num};
    // newNum.user='rohit'
    // newNum.age=29
    // setnum(newNum)

    //2
    // const newNum = [...num];
    // newNum.push(99);
    // setnum(newNum);

    //3
    // setnum(prev=>({...prev,age:23}))

    //4 batch update
    setnum(prev => (prev+1))
    setnum(prev => (prev+1))
    setnum(prev => (prev+1))


  };

  return (
    <div>
      
      {/* <h1>{num.user}...{num.age}</h1>   1,3 */}

      <h1>{num}</h1>            {/* 2,4 */}

      <button onClick={btnClicked}>click</button>
    </div>
  );
};

export default App;
