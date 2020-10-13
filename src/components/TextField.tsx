import React, { ChangeEvent, useState } from 'react'
import { TextFieldInterface } from '../types'

const TextField = ({
  name,
  type,
  className = 'field-text',
  handler
}: TextFieldInterface) => {
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
        type={type}
        id={name}
        onChange={handleOnChane}
        value={value}
        className={className}
      ></input>
    </div>
  )
}

export default TextField
