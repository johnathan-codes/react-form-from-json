import React from 'react'
import Field from './components/field'
import { FieldsInterface } from './functions/interfaces'

export const Form = ({ fields }: FieldsInterface) => {
  return (
    <div>
      <h1>Form</h1>
      {fields.length !== 0 &&
        fields.map((field: any, index: number) => {
          return <Field name={field.name} type={field.type} key={index} />
        })}
    </div>
  )
}
