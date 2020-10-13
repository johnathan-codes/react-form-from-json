import React, { ChangeEvent, useState } from 'react'
import { SelectFieldInterface } from '../types'

const SelectField = ({
  name,
  values,
  className = 'field-select',
  displayUnder,
  handler
}: SelectFieldInterface) => {
  const [value, setValue] = useState<string>(values[0].key)

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
    handler(name, e.target.value)
  }
  return (
    <div style={{ width: '150px' }} className={className}>
      <label htmlFor={name} className={className}>
        {name}
      </label>
      {displayUnder && <br />}
      <select
        id={name}
        onChange={(e) => {
          handleOnChange(e)
        }}
        value={value}
        className={className}
      >
        {values.map((option) => {
          return (
            <option value={option.key} key={option.key} className={className}>
              {option.value}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectField
