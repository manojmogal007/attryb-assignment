import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default Allroutes