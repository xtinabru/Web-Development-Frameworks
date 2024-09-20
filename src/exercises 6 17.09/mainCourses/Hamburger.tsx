import React from 'react'
import { MenuCategoryProps } from '../MenuTypes'


export default function Hamburger({MenuItems}: MenuCategoryProps) {
  return (
    <div>{MenuItems.map(i => <div>{i.name}, {i.price}€</div>)}</div>
  )
}
