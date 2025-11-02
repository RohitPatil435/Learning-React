import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  // Example 1
// const [num1, setnum1] = useState(0)
// const [num2, setnum2] = useState(100)

// useEffect(function() {
//   console.log('use effect running')
  
// },[num1,num2])
  // dependency array

  // Example 2

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChange(){
    console.log('a changed');
  }
  function bChange(){
    console.log('b changed');
  }

useEffect(function(){
  aChange()
  console.log('use effect running')
},[a])

useEffect(function(){
  bChange()
  console.log('use effect running')
},[b])
  return (
    <div>
      {/* <div>
        <h1>num 1 : {num1}</h1> 
      <h1>num 2 : {num2}</h1>
      <button onMouseEnter={()=>{
        setnum1(num1 +1)
      }} 
      
      onMouseLeave={()=>{
        setnum2(num2+10)
      }}>Click</button>
      </div> */}

    <div>
      <h1>A : {a}</h1>
      <h1>B : {b} </h1>
      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button>
      <button onClick={()=>{
        setB(b-1)
      }} >Change B</button>
    </div>

    </div>
  )
}

export default App
