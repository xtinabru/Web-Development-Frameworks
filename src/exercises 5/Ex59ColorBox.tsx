import React from 'react'

export default function Ex59ColorBox({color}) {

  const boxStyle = {
    width: '150px',
    height: '150px',
    border: '1px solid black',
    backgroundColor: color, 
    margin: '10px',
  };
  
  return (
   <div>
    <div style={boxStyle}></div>
    <div style={boxStyle}></div>
    <div style={boxStyle}></div>
   </div>

  )
}
