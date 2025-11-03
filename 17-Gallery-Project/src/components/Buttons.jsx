import React from 'react'

const Buttons = ({ index, setIndex, setUserData }) => {
  return (
    <div className="flex justify-center gap-4 items-center p-4">
        <button 
        style={{opacity:index == 1 ? 0.6 : 1}}
        className="bg-amber-400 text-black px-4 py-2 font-semibold cursor-pointer rounded"
        onClick={()=>{
         if(index>1){
          setIndex(index-1)
          setUserData([])
         }
          
        }}>
          Prev
          </button>
          <h4>Page {index}</h4>
        <button 
        className="bg-amber-400 text-black px-4 py-2 font-semibold cursor-pointer rounded"
         onClick={()=>{
          setUserData([])
          setIndex(index+1)

        }}>
          Next
          </button>
     
    </div>
  )
}

export default Buttons
