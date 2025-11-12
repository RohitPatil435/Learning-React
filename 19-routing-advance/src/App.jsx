import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Courses from './Pages/Courses'
import CourseDetails from './Pages/CourseDetails'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <div className='h-screen w-full bg-black font-semibold text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CourseDetails />}  />
        {/* nested routing */}
        <Route path='/product' element={<Product />} >
        <Route path='men' element={<Men />} />
        <Route path='women' element={<Women />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App