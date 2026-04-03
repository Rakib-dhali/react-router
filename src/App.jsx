import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App