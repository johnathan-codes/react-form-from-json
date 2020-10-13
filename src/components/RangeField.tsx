import React, { ChangeEvent, useState } from 'react'
import { RangeFieldInterface } from '../types'

const RangeField = ({
  name,
  min,
  max,
  className = 'field-range',
  handler
}: RangeFieldInterface) => {
  const [value, setValue] = useState('')

  const handleOnChane = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    handler(name, e.target.value)
  }

  return (
    <div className={className}>
      <label htmlFor={name} className={className}>
        {name}
      </label>
      <input
        type='range'
        id={name}
        onChange={handleOnChane}
        value={value}
        min={min}
        max={max}
        className={className}
      ></input>
    </div>
  )
}

export default RangeField
