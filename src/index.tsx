import React, { FormEvent, useState } from 'react'
import TextField from './components/TextField'
import { FormInterface } from './functions/interfaces'

export const Form = ({ fields, submitAction }: FormInterface) => {
  const [payload, setPayload] = useState({})

  const handler = (key: string, value: any) => {
    setPayload((prevPayload) => ({ ...prevPayload, [key]: value }))
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
            return (
              <TextField
                name={field.name}
                type={field.type}
                key={index}
                handler={handler}
                inputType={field.inputType}
              />
            )
          })}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
