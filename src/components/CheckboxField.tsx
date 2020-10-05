import React, { useState, useEffect } from 'react'
import { FieldInterface } from '../types'

const CheckboxField: React.FC<FieldInterface> = ({ name, handler }) => {
  const [checked, setChecked] = useState(false)
  const handleOnChange = () => {
    setChecked((prevChecked: boolean) => !prevChecked)
  }

  useEffect(() => {
    handler(name, checked)
  }, [checked])

  return (
    <div className='checkbox-inner'>
      <input
        type='checkbox'
        className='input-checkbox'
        onChange={handleOnChange}
      />
      <span className='notice-text'>{name}</span>
    </div>
  )
}

export default CheckboxField
