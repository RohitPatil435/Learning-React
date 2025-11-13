import React from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'

// import { useState } from 'react'

const App = () => {

  // const [theme, setTheme] = useState('light')

  return (
    <div>
      {/* <Navbar theme={theme} >
        <h3>Navbar 1 </h3>
        <h3>Navbar 2</h3>
      </Navbar> */}

      {/* <Navbar theme={theme} /> */}

      <Navbar />
      <Button />

    </div>
  )
}

export default App