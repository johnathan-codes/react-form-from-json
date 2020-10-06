import React, { FormEvent, useState } from 'react'
import CheckboxField from './components/CheckboxField'
import TextField from './components/TextField'
import { FieldPropInterface, FormInterface } from './types'

export const Form = ({ fields, submitAction }: FormInterface) => {
  const [payload, setPayload] = useState({})

  const handler = (key: string, value: any) => {
    setPayload((prevPayload) => ({ ...prevPayload, [key]: value }))
  }

  const fieldSelector = (field: FieldPropInterface, index: number) => {
    switch (field.type) {
      case 'boolean':
        return (
          <CheckboxField
            name={field.name}
            type={field.inputType}
            key={index}
            handler={handler}
          />
        )
      case 'text':
        return (
          <TextField
            name={field.name}
            type={field.inputType}
            key={index}
            handler={handler}
          />
        )
      default:
        return <p key={index}>Not yet implemented</p>
    }
  }

  return (
    <div>
      <h1>Form</h1>
      <form
        role='form'
        method='post'
        id='generated-form'
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          submitAction(e, payload)
        }}
      >
        {fields.length !== 0 &&
          fields.map((field: any, index: number) => {
            return fieldSelector(field, index)
          })}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
