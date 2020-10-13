import React, { ChangeEvent, useState } from 'react'
import { TextAreaInterface } from '../types'

const TextAreaField = ({
  name,
  rows,
  cols,
  className = 'field-area',
  displayUnder,
  handler
}: TextAreaInterface) => {
  const [value, setValue] = useState('')

  const handleOnChane = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    handler(name, e.target.value)
  }

  return (
    <div className={className}>
      <label htmlFor={name} className={className}>
        {name}
      </label>
      {displayUnder && <br />}
      <textarea
        id={name}
        onChange={handleOnChane}
        value={value}
        rows={rows}
        cols={cols}
        className={className}
      ></textarea>
    </div>
  )
}

export default TextAreaField
