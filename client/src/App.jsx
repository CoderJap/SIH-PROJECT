import React from 'react'
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'



const App = () => {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </Router>



    </div>
  )
}

export default App