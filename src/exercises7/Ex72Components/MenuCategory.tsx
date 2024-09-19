import React from 'react'
import CategoryDish from './CategoryDish'


export default function MenuCategory({ name, image, dishes }) {

  let dishesArray = []
  for(let i = 0; i < dishes.length; i ++){
    dishesArray.push( <CategoryDish dishName={dishes[i].name} price={dishes[i].price}/>)
  }



  return (
    <div>
    <h1>{ name }</h1>
    <img src={image} />
  
    { dishesArray }
  
  </div>
  )
}
