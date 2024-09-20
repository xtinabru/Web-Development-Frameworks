import React from 'react'

type HomeProps = {
  name: string,
  description: string,
  contactInfo: string,
  phoneNumber: string,
}

export default function Home({dataInfo}: HomeProps) {
  return (
    <div>
      <h1>{dataInfo.name}</h1>
      <p>{dataInfo.description}</p>
      <p><strong>{dataInfo.contactInfo}</strong></p>
      <p><strong>{dataInfo.phoneNumber}</strong></p>
    </div>
  )
}
