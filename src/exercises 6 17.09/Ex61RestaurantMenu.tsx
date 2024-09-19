import React from 'react'
import MainCourses from './MainCourses'
import Drinks from './Drinks'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


export default function Ex61RestaurantMenu() {

  const drinks = [
    {name: 'Cola', price: 2},
    {name: 'Tea', price: 1},
    {name: 'Coffee', price: 1}
  ]
  const food = [
    {name: 'Pasta', price: 10},
    {name: 'Hamburger', price: 8},
    {name: 'Snacks', price: 5}
  ]

  return (
   <BrowserRouter>
   <div>
      <h1>Restaurant Menu</h1>
      <div>
        <Link to={'/drinks'}>Drinks </Link>
        <Link to={'/main-courses'}> Main Courses</Link>
      </div>
   </div>
   <Routes>
      <Route path='/drinks' element={<Drinks MenuItems={drinks}/>}/>
      <Route path='/main-courses' element={<MainCourses MenuItems={food}/>} />
   </Routes>
   </BrowserRouter>
  )
}
