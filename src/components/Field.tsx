import React from 'react'
import { FieldInterface } from '../functions/interfaces'

const Field: React.FC<FieldInterface> = ({ name, type }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name}></input>
    </div>
  )
}

export default Field
