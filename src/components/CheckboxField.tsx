import React, { useState, useEffect } from 'react'
import { CheckboxFieldInterface } from '../types'

const CheckboxField = ({
  name,
  className = 'field-checkbox',
  handler
}: CheckboxFieldInterface) => {
  const [checked, setChecked] = useState(false)
  const handleOnChange = () => {
    setChecked((prevChecked: boolean) => !prevChecked)
  }

  useEffect(() => {
    handler(name, checked)
  }, [checked])

  return (
    <div className={className}>
      <input type='checkbox' className={className} onChange={handleOnChange} />
      <label className={className}>{name}</label>
    </div>
  )
}

export default CheckboxField
