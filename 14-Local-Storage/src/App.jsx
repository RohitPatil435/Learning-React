import React from 'react'

const App = () => {

  // localStorage.clear()  // clears the local storage
  // sessionStorage.clear() // clears the session storage

  // localStorage.setItem('user','rohit')  // sets the data in local storage
  // sessionStorage.setItem('user','rohit')  // sets the data in session storage

  // const user = localStorage.getItem('user') // gets the data from local storage
  // console.log(user);
  
  // localStorage.setItem('age',20)
  // const age = localStorage.getItem('age')
  // console.log(age);

  // localStorage.removeItem('user') // removes the data from local storage

  // const user ={
  //   name:'rohit',
  //   age:20
  // }

  // localStorage.setItem('user',JSON.stringify(user)) // sets the data in local storage as object
    
  const user = JSON.parse(localStorage.getItem('user')) // gets the data from local storage as object
  console.log(user);

  return (
    <div>
      app
    </div>
  )
}

export default App
