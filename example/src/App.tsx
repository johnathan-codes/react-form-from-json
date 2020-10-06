import React, { FormEvent, useEffect, useState } from 'react'
import { Form } from 'react-form-from-json'
import get from 'axios'
import 'react-form-from-json/dist/index.css'

const App = () => {
  const [fields, setFields] = useState([])
  const handleSubmit = (e: FormEvent<HTMLFormElement>, payload: {}) => {
    e.preventDefault()
    console.log('HandleSubmit -> payload', payload)
  }

  useEffect(() => {
    get('http://localhost:3100/fields', {
      method: 'GET'
    }).then((res: any) => {
      setFields(res.data)
    })
  }, [])

  return <Form fields={fields} submitAction={handleSubmit} />
}

export default App
