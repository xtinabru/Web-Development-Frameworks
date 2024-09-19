import React from 'react'


interface UserData{
  firstName: string,
  lastName: string,
  age: number
}

interface UserName{
  UserData: UseData
}

export default function Ex2NameAsAnObject({userData}: UserData) {

  return (
    <div>
      {userData.firstName} {userData.lastName}, {userData.age}
    </div>
  )
}
