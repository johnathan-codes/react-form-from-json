import React, { ChangeEvent, useState } from 'react'
import { TextFieldInterface } from '../types'

const TextField = ({ name, handler, type }: TextFieldInterface) => {
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
