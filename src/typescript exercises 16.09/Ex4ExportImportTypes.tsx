import React from 'react'
import { UserData, UserName } from './UserNameTypes'

export default function Ex4ExportImportTypes({userData}: UserData) {
  return (
    <div>
      {userData.firstName} {userData.lastName}, {userData.age}
    </div>
  )
}
