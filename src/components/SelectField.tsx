import React, { ChangeEvent, useState } from 'react'
import { SelectFieldInterface } from '../types'

const SelectField = ({ name, values, handler }: SelectFieldInterface) => {
  const [value, setValue] = useState<string>(values[0].key)

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
    handler(name, e.target.value)
  }
  return (
    <div style={{ width: '150px' }} className='field-select'>
      <label htmlFor={name} className='field-select'>
        {name}
      </label>
      <select
        id={name}
        onChange={(e) => {
          handleOnChange(e)
        }}
        value={value}
        className='field-select'
      >
        {values.map((option) => {
          return (
            <option
              value={option.key}
              key={option.key}
              className='field-select'
            >
              {option.value}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectField
