import React, { ChangeEvent, useState } from 'react'
import { FieldInterface } from '../functions/interfaces'

const TextField: React.FC<FieldInterface> = ({
  name,
  type,
  handler,
  inputType
}) => {
  const [value, setValue] = useState<typeof type>(type)
  console.log('type', type)

  const handleOnChane = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    handler(name, e.target.value)
  }

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type={inputType}
        id={name}
        onChange={handleOnChane}
        value={value}
      ></input>
    </div>
  )
}

export default TextField
