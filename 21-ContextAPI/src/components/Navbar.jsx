import React from 'react'
import Navbar2 from './Navbar2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => { //destructring
  // console.log(children);

  // const data = useContext(ThemeDataContext)
  // // console.log(data);

  const [theme] = useContext(ThemeDataContext)

  return (
    <div className={theme}>

      {/* <h1>{data}</h1> */}
      {/* {children[0]} */}
      {/* <Navbar2 theme={props.theme}/> */}

      <h1>Rohit</h1>
      <Navbar2 />


    </div>
  )
}

export default Navbar