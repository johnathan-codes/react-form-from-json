import React, { FormEvent, useEffect, useState } from 'react'
import { Form } from 'react-form-from-json'
import get from 'axios'

const App = () => {
  const [form, setForm] = useState({
    name: '',
    fields: []
  })

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
    get('http://localhost:3100/form', {
      method: 'GET'
    }).then((res: any) => {
      setForm(res.data)
    })
  }, [])

  return (
    <div>
      <legend>{form.name}</legend>
      <Form fields={form.fields} submitAction={handleSubmit} />
    </div>
  )
}

export default App
