import React, { useState, useEffect } from 'react'
import { CheckboxFieldInterface } from '../types'

const CheckboxField = ({ name, handler }: CheckboxFieldInterface) => {
  const [checked, setChecked] = useState(false)
  const handleOnChange = () => {
    setChecked((prevChecked: boolean) => !prevChecked)
  }

  useEffect(() => {
    handler(name, checked)
  }, [checked])

  return (
    <div className='field-checkbox'>
      <label className='field-checkbox'>{name}</label>
      <input
        type='checkbox'
        className='field-checkbox'
        onChange={handleOnChange}
      />
    </div>
  )
}

export default CheckboxField
