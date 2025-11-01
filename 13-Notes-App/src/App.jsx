import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(title, detail);

    const copyTask = [...task];
    copyTask.push({ title, detail })
    setTask(copyTask)
    // console.log(copyTask);

    setTitle('')
    setDetail('')
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)


  }

  return (
    <div className='h-screen lg:flex  text-white bg-black  '>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex p-10 lg:w-1/2 items-start flex-col gap-5   '>
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* first input for heading */}
        <input
          type="text"
          placeholder='Enter Note heading'
          className='text-2xl font-medium w-full border-2 outline-none border-white mr-5 p-5 rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        {/* second input for details */}
        <textarea
          type="text"
          className='text-2xl w-full font-medium outline-none flex items-start flex-row p-5 h-35 border-2 border-white mr-5 rounded'
          placeholder='Write details'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
        />

        {/* add button */}

        <button className='text-2xl w-full cursor-pointer active:scale-95 outline-none font-bold text-black  border-2 bg-white mr-5 p-2 rounded'>Save</button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'  >
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap  gap-5 items-start justify-start mt-5 h-[90%] overflow-auto'>

          {task.map(function (elem, idx) {

            return <div key={idx} className="flex flex-col justify-between items-start relative h-52  w-40 px-5 pb-4 py-8   text-black rounded-xl bg-[url('https://static.vecteezy.com/system/resources/previews/010/793/873/non_2x/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] bg-cover">
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight font-medium text-gray-600'>{elem.detail}</p>
              </div>

              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full bg-red-500 py-1 text-xs cursor-pointer active:scale-95 text-white font rounded'>Delete</button>

            </div>

          })}
        </div>

      </div>
    </div>
  )
}

export default App
