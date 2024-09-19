import React from 'react'

export default function CategoryDish({dishName, price}) {
  return (
    <div>
      <div>{dishName}, {price}€</div>
    </div>
  )
}
