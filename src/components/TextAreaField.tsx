import React, { ChangeEvent, useState } from 'react'
import { TextAreaInterface } from '../types'

const TextAreaField: React.FC<TextAreaInterface> = ({
  name,
  handler,
  rows,
  cols
}) => {
  const [value, setValue] = useState('')

  const handleOnChane = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    handler(name, e.target.value)
  }

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <textarea
        id={name}
        onChange={handleOnChane}
        value={value}
        rows={rows}
        cols={cols}
      ></textarea>
    </div>
  )
}

export default TextAreaField