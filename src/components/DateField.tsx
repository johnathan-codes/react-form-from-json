import React, { useState } from 'react'
import { DateFieldInterface } from '../types'
import DatePicker from 'react-datepicker'

const DateField = ({ name, handler }: DateFieldInterface) => {
  const [value, setValue] = useState(new Date())
  console.log('DateField -> value', value)

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <DatePicker
        locale='sk'
        selected={value}
        onChange={(date: Date) => {
          if (date !== null) {
            setValue(date)
            handler(name, date)
          }
        }}
      />
    </div>
  )
}

export default DateField
