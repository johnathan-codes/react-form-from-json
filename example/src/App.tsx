import React from 'react'

import { Form } from 'react-form-from-json'
import { fieldInterface } from 'react-form-from-json/dist/functions/interfaces'
import 'react-form-from-json/dist/index.css'

const App = () => {
  const fields: fieldInterface[] = [
    {
      name: 'Dummy checkbox',
      type: 'checkbox'
    },
    {
      name: 'Dummy color',
      type: 'color'
    }
  ]

  return <Form fields={fields} />
}

export default App
