import React, { ChangeEvent, useState } from 'react'
import { TextFieldInterface } from '../types'

const TextField = ({ name, handler, type }: TextFieldInterface) => {
  const [value, setValue] = useState('')

  const handleOnChane = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    handler(name, e.target.value)
  }

  return (
    <div className='field-text'>
      <label htmlFor={name} className='field-text'>
        {name}
      </label>
      <input
        type={type}
        id={name}
        onChange={handleOnChane}
        value={value}
        className='field-text'
      ></input>
    </div>
  )
}

export default TextField
