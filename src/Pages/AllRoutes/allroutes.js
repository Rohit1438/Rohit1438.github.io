import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import About from '../About/About'

const Allroutes = () => {
  return (
<Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/about' element={<About/>}/>
</Routes>
  )
}

export default Allroutes
