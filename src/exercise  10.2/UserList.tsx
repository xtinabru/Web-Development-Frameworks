import React from 'react'

interface User {
  firstName: string,
  lastName: string,
}

export default function UserList({users}: {users: User[]}) {

  return (
    <div>
       { 
        users.map(user => <div>{user.firstName}{user.lastName}</div>)
       }
    </div>
  )
}
