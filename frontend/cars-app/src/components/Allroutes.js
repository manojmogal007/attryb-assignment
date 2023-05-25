import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Oemspecs from '../pages/Oemspecs'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/oemspecs' element={<Oemspecs/>}></Route>
    </Routes>
  )
}

export default Allroutes