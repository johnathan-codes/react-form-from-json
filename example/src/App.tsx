import React from 'react'

import { Form } from 'react-form-from-json'
import 'react-form-from-json/dist/index.css'

const App = () => {
  const fields = [
    {
      name: 'Dummy email',
      type: 'email'
    },
    {
      name: 'Dummy number',
      type: 'number'
    },
    {
      name: 'Dummy password',
      type: 'password'
    },
    {
      name: 'Dummy search',
      type: 'search'
    },
    {
      name: 'Dummy tel',
      type: 'tel'
    },
    {
      name: 'Dummy text',
      type: 'text'
    },
    {
      name: 'Dummy url',
      type: 'url'
    }
  ]

  return <Form fields={fields} />
}

export default App
