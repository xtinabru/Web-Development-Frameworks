import React from 'react'

export default function Ex510ChildComponent({incrementCounter}) {
  return (
    <div>
      <button onClick={incrementCounter}>Counter button</button>
    </div>
  )
}
