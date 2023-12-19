import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { Link, NavLink } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <nav>
        <ul>
          <li> <NavLink to={"/"}>Home</NavLink></li>
          <li> <NavLink to={"/About"}>About</NavLink></li>
        </ul>
      </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </>

  )
}

export default App
