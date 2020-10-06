import React, { ChangeEvent, useState } from 'react'
import { FieldInterface } from '../types'

const TextField: React.FC<FieldInterface> = ({ name, handler, type }) => {
  const [value, setValue] = useState('')

  const handleOnChane = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    handler(name, e.target.value)
  }

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        onChange={handleOnChane}
        value={value}
      ></input>
    </div>
  )
}

export default TextField
