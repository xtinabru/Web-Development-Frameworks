import React from 'react'

export default function Ex33ContactItem({name, address}) {
  return (
    <div>
      <div><b>{name}</b></div>
      <div>{address}</div>
    </div>
  )
}
