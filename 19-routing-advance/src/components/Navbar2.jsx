import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    //navigate use to navigate
  const navigate = useNavigate()

  return (
    <div className='py-1 px-5 bg-cyan-700'>
      <button 
      onClick={()=>{
        navigate('/')
      }} 
      className='bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-90'>
      Return to Home Page</button>
      
       <button 
      onClick={()=>{
        navigate(-1)
      }} 
      className='bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-90'>
       Back</button>

        <button 
      onClick={()=>{
        navigate(+1)
      }} 
      className='bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-90'>
       Next</button>
    </div>
  )
}

export default Navbar2
