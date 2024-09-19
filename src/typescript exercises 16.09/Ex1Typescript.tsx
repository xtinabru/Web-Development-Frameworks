import React from 'react'

interface FullName {
  firstName: string,
  lastName: string,
  age: number
}

export default function Ex1Typescript({firstName, lastName, age}: FullName) {
  return (
    <div>{firstName} {lastName} {age}</div>
  )
}
