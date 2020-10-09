import React, { useState } from 'react'
import { RadioFieldInterface } from '../types'

const RadioField = ({ name, values, handler }: RadioFieldInterface) => {
  const [value, setValue] = useState()

  const handleOnClick = (e: any) => {
    setValue(e.target.value)
    handler(name, e.target.value)
  }

  return (
    <div className='field-radio'>
      <p className='field-radio'>{name}</p>
      {values.map((option, index) => {
        return (
          <div key={index}>
            <input
              type='radio'
              id={option.value}
              value={option.key}
              onChange={handleOnClick}
              checked={value === option.key}
              className='field-radio'
            />
            <label htmlFor={option.value} className='field-radio'>
              {option.value}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default RadioField
