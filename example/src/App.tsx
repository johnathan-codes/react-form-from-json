import React, { FormEvent, useEffect, useState } from 'react'
import { Form } from 'react-form-from-json'
import get from 'axios'
import 'react-form-from-json/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './datepicker.css'

const App = () => {
  const [fields, setFields] = useState([])
  const handleSubmit = (e: FormEvent<HTMLFormElement>, payload: {}) => {
    e.preventDefault()
    console.log('HandleSubmit -> payload', payload)
    //FIY Create new form data
    // let formData = new FormData()
    // Object.keys(payload).forEach((key) => {
    //   formData.append(key, payload[key])
    // })
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
