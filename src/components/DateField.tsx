import React, { useState, useEffect } from 'react'
import { DateFieldInterface } from '../types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateField = ({
  name,
  min,
  max,
  format,
  displayUnder,
  className = 'field-date',
  handler
}: DateFieldInterface) => {
  const [value, setValue] = useState(new Date())

  useEffect(() => {
    if (min !== undefined) {
      if (new Date(min) > new Date()) {
        setValue(new Date(min))
      }
    }
  }, [])

  return (
    <div>
      <label htmlFor={name} className={className}>
        {name}
      </label>
      {displayUnder && <br />}
      <DatePicker
        selected={value}
        onChange={(date: Date) => {
          setValue(date)
          handler(name, date)
        }}
        dateFormat={format}
        {...(min !== undefined ? { minDate: new Date(min) } : {})}
        {...(max !== undefined ? { maxDate: new Date(max) } : {})}
      />
    </div>
  )
}

export default DateField
