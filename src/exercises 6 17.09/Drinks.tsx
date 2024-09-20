import React from 'react'
import { MenuCategoryProps } from './MenuTypes'

export default function Drinks({ MenuItems }: MenuCategoryProps) {
  return (
    <div>
    <div>  {MenuItems.map(i => <div>{i.name}, {i.price}€</div>)}</div>
    </div>
  )
}
