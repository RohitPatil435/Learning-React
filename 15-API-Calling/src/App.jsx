import React, { useState } from 'react'
import axios from 'axios'
const App = () => {


  // using fetch method

  // const getData = async() =>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
  //   const data = await response.json()
  //   console.log(data);
  // }


  // using axios method

  // const getData = async() => {
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(data);
    
  // }

  const [data, setData] = useState([])

  const getData=async()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    
    setData(response.data)
    
  }

  return (
    <div>
      <button onClick={getData}>get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>hello, {elem.author}{idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
