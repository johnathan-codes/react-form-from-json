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
    <div className='checkbox-inner'>
      <span className='notice-text'>{name}</span>
      <input
        type='checkbox'
        className='input-checkbox'
        onChange={handleOnChange}
      />
    </div>
  )
}

export default CheckboxField
