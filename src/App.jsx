import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Countries from './Countries'
import NotFound from './NotFound'
import { Link, NavLink } from 'react-router-dom'
function App() {
  

  return (
  <>
    <nav>
      <menu>
        <ul>
          <li> <NavLink to={"/"}>Home</NavLink></li>
          <li> <NavLink to={"/About"}>About</NavLink></li>
          <li> <NavLink to={"/Countries"}>countries</NavLink></li>
        </ul>
      </menu>
        
      </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Countries' element={<Countries/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </>

  )
}

export default App
