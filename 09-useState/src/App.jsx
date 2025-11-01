import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function increaseNum(){
    setnum(num+1)
  }

  function decreaseNum(){
     setnum(num-1)

  }
  
  function jumpByFive(){
    setnum(num+5)
  }

  function Reset(){
    setnum(0)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpByFive}>Jump by 5</button>
      <button onClick={Reset}>Reset</button>

    </div>
  )
}

export default App
