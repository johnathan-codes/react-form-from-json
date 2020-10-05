import React, { FormEvent } from 'react'
import { Form } from 'react-form-from-json'
import 'react-form-from-json/dist/index.css'

const App = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>, payload: {}) => {
    e.preventDefault()
    console.log('HandleSubmit -> payload', payload)
  }

  const fields = [
    {
      name: 'Dummy email',
      inputType: 'email',
      type: String
    },
    {
      name: 'Dummy number',
      inputType: 'number',
      type: String
    },
    {
      name: 'Dummy password',
      inputType: 'password',
      type: String
    },
    {
      name: 'Dummy search',
      inputType: 'search',
      type: String
    },
    {
      name: 'Dummy tel',
      inputType: 'tel',
      type: String
    },
    {
      name: 'Dummy text',
      inputType: 'text',
      type: String
    },
    {
      name: 'Dummy url',
      inputType: 'checkbox',
      type: Boolean
    }
  ]

  return <Form fields={fields} submitAction={handleSubmit} />
}

export default App
