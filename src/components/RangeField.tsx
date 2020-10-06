import React, { ChangeEvent, useState } from 'react'
import { RangeFieldInterface } from '../types'

const RangeField: React.FC<RangeFieldInterface> = ({
  name,
  min,
  max,
  handler
}) => {
  const [value, setValue] = useState('')

  const handleOnChane = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    handler(name, e.target.value)
  }

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type='range'
        id={name}
        onChange={handleOnChane}
        value={value}
        min={min}
        max={max}
      ></input>
    </div>
  )
}

export default RangeField
