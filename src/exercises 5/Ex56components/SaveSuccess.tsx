import React from 'react'

export default function SaveSuccess({firstName, lastName, emailAddress}) {

  return (
    <div>
      Saved {firstName} {lastName} ({emailAddress})
    </div>
  )
}
