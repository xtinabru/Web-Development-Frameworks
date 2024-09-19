import React, {useState}  from 'react'

type ButtonProps = {
  label: string,
  onClick: () => void;
}

export default function Ex5ButtonComponent({label, onClick}: ButtonProps) {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  )
}
