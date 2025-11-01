import React from 'react'
import Card from './components/Card'


const App = () => {
  return (
    <div className='parent'>
    <Card user='Sarthak' age={18}  img='https://plus.unsplash.com/premium_photo-1759922656886-13508d151731?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1000'/>
    <Card user='Rohit' age={20} img='https://images.unsplash.com/photo-1760124128502-66d9ceaa418b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=1000' />

    </div>
  )
}

export default App
