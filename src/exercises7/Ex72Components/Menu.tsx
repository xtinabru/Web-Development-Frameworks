import React from 'react'
import MenuCategory from './MenuCategory'
import ChickenImage from './../../assets/2907a1f8-4c9c-418a-a84e-5bc5046ede74.jpeg'
import HamburgerImage from './../../assets/45d6deae-13e5-4a76-9e19-2c5d204251fc.jpeg'
import PastaImage from './../../assets/30382ddf-5278-458a-b299-b6a676e62102.jpeg'

export default function Menu({Menudata}) {

  const Hamburgers = [
    { name: 'Mozzarella Burger', price: 8},
    { name: 'Dolce Marinara Burger', price: 10},
    { name: ' Quattro Formaggi Burger', price: 7}
  ]

  const MeatAndFishDishes = [
    { name: 'Chicken Cacciatore', price: 15 },
    { name: 'Vitello Tonnato', price: 15 },
    { name: 'Arista di Maiale', price: 15 } 
  ]

  const PastaDishes = [
    { name: 'Spaghetti Carbonara', price: 12},
    { name: 'Spaghetti Bolognese', price: 12},
    { name: 'Cannelloni di carne', price: 15}
  ]


  return (
    <div>
      <h1>Menu</h1>
      <MenuCategory name="Hamburgers" image={HamburgerImage} dishes = {Hamburgers}/>
      <MenuCategory name="Meat and fish" image={ChickenImage} dishes = { MeatAndFishDishes}/>
      <MenuCategory name="Pasta" image={PastaImage} dishes = { PastaDishes}/>
    </div>
  )
}
