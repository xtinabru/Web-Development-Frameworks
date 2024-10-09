import React from 'react'

interface User {
  firstName: string,
  lastName: string
}


export default function Ex102UserList({ users }: {users: User[]}) {


  return (
    <div>
     <ul>
      <li>1</li>
     </ul>
    </div>
  )
}
