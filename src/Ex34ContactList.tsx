import React from 'react'
import Ex33ContactItem from './Ex33ContactItem'

export default function Ex34ContactList({contacts}) {

  const output = [];
  for(let i = 0; i < contacts.length; i++){
    output.push(<Ex33ContactItem name={contacts[i].name} address={contacts[i].address}/>);
  }

  return (
    <div>{ output }</div>
  )
}
