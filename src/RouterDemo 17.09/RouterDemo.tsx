import React from 'react'
import ViewA from './ViewA'
import ViewB from './ViewB'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function RouterDemo() {
  return (
    <div>
      <BrowserRouter>
      <h1>This is React Router Demo</h1>
      <div>
        Menu
        <Link to='/viewA'><div>MenuItem for View A</div></Link>
        <Link to='/viewB'><div>MenuItem for View B</div></Link>
      </div>
      <Routes>
        <Route path='/viewA' element={<ViewA/>}/>
        <Route path='/viewB' element={<ViewB/>}/>
      </Routes>
      </BrowserRouter>
 
    </div>
  )
}
  