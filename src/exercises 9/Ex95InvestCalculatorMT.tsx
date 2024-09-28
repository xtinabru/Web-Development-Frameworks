import React from 'react'

export default function Ex95InvestCalculatorMT() {
  return (
    <div>
      <h2>Investment calculator</h2>
      <div>
        <input type="number" min="0" step="0.01"
         placeholder='Initial Investment' />
      </div>
      <div>
        <input type="number" 
        placeholder='Annual return rate'/>
      </div>
        <div>
          <input type="number" min="1" step="0"
           placeholder='Investment Duration'/>
        </div>
        <div>
          <input type="number" 
          placeholder='Additional Annual Contributions'/>
        </div>
    </div>
  )
}
