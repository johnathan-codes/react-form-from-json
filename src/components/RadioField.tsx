import React, { useState } from 'react'
import { RadioFieldInterface } from '../types'

const RadioField = ({
  name,
  values,
  className = 'field-radio',
  handler
}: RadioFieldInterface) => {
  const [value, setValue] = useState()

  const handleOnClick = (e: any) => {
    setValue(e.target.value)
    handler(name, e.target.value)
  }

  return (
    <div className={className}>
      <p className={className}>{name}</p>
      {values.map((option, index) => {
        return (
          <div key={index}>
            <input
              type='radio'
              id={option.value}
              value={option.key}
              onChange={handleOnClick}
              checked={value === option.key}
              className={className}
            />
            <label htmlFor={option.value} className={className}>
              {option.value}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default RadioField
