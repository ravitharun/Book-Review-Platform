import React from 'react'
import Login from './Components/Auth/Login'
import Signup from './Components/Auth/Signup'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Login></Login>
      <Signup></Signup>
    </>
  )
}

export default App
