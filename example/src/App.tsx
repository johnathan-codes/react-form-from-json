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
      type: 'text'
    },
    {
      name: 'Dummy number',
      inputType: 'number',
      type: 'text'
    },
    {
      name: 'Dummy password',
      inputType: 'password',
      type: 'text'
    },
    {
      name: 'Dummy search',
      inputType: 'search',
      type: 'text'
    },
    {
      name: 'Dummy tel',
      inputType: 'tel',
      type: 'text'
    },
    {
      name: 'Dummy text',
      inputType: 'text',
      type: 'text'
    },
    {
      name: 'Dummy url',
      tyinputTypepe: 'url',
      type: 'text'
    }
  ]

  return <Form fields={fields} submitAction={handleSubmit} />
}

export default App
