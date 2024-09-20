import React from 'react'
import MainCourses from './MainCourses'
import Drinks from './Drinks'
import Home from './Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Pizza from './mainCourses/Pizza'
import Pasta from './mainCourses/Pasta'
import Hamburger from './mainCourses/Hamburger'

export default function Ex61RestaurantMenu() {

  const drinks = [
    {name: 'Cola', price: 2},
    {name: 'Tea', price: 1},
    {name: 'Coffee', price: 1}
  ]

  const pizzas = [
    { name: 'Margherita', price: 10 },
    { name: 'Pepperoni', price: 12 },
    { name: 'Vegetarian', price: 11 },
  ];

  const pastas = [
    { name: 'Spaghetti', price: 8 },
    { name: 'Fettuccine', price: 9 },
  ];
  
  const hamburgers = [
    { name: 'Cheeseburger', price: 7 },
    { name: 'Veggie Burger', price: 6 },
  ];

  const dataInfo = {
    name: 'Restoranio',
    description: 'Welcome to Restoranio where culinary excellence meets a warm and inviting atmosphere. Our menu is crafted with the freshest ingredients, offering a unique blend of classic dishes and modern flavors.',
    contactInfo: '123 Gourmet Street, Foodie Town, FL 45678',
    phoneNumber: '356-34-55'
  };
  

  return (
   <BrowserRouter>
   <div>
      <div>
        <Link to={'/'}>Home </Link>
        <Link to={'/drinks'}>Drinks </Link>
        <Link to={'/main-courses'}> Main Courses</Link>
         
      </div>
   </div>

   <Routes>
        <Route path="/" element={<Home dataInfo={dataInfo} />} />
        <Route path="/drinks" element={<Drinks MenuItems={drinks} />} />
        <Route path="/main-courses" element={<MainCourses />}>
          <Route path="pizza" element={<Pizza MenuItems={pizzas} />} />
          <Route path="pasta" element={<Pasta MenuItems={pastas} />} />
          <Route path="hamburgers" element={<Hamburger MenuItems={hamburgers} />} />
        </Route>
      </Routes>
   </BrowserRouter>
  )
}
