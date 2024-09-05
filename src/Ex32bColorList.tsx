import React from 'react'

export default function Ex32bColorList({colors}) {

  let output = [];
  for(let i = 0; i < colors.length; i++)
    {
      output.push(<li>{colors[i]}</li>);
    }

  return (
    <ul>
      { output }
    </ul>
  )
}
