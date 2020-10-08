import React, { useState, useEffect } from 'react'
import { DateFieldInterface } from '../types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateField = ({ name, min, max, format, handler }: DateFieldInterface) => {
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
      <label htmlFor={name}>{name}</label>
      <DatePicker
        locale='sk'
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
