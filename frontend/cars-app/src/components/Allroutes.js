import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Oemspecs from '../pages/Oemspecs'
import Addcar from '../pages/Addcar'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/oemspecs' element={<Oemspecs/>}></Route>
        <Route path='/addcar' element={<Addcar/>}></Route>
    </Routes>
  )
}

export default Allroutes