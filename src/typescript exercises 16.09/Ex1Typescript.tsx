import React from 'react'

interface FullName {
  firstName: string,
  lastName: string

}


export default function Ex1Typescript({firstName, lastName}: FullName) {
  return (
    <div>{firstName} {lastName}</div>
  )
}
