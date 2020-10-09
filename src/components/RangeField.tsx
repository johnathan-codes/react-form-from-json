import React, { ChangeEvent, useState } from 'react'
import { RangeFieldInterface } from '../types'

const RangeField = ({ name, min, max, handler }: RangeFieldInterface) => {
  const [value, setValue] = useState('')

  const handleOnChane = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    handler(name, e.target.value)
  }

  return (
    <div className='field-range'>
      <label htmlFor={name} className='field-range'>
        {name}
      </label>
      <input
        type='range'
        id={name}
        onChange={handleOnChane}
        value={value}
        min={min}
        max={max}
        className='field-range'
      ></input>
    </div>
  )
}

export default RangeField
