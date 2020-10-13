import React, { FormEvent, useEffect, useState } from 'react'
import { Form } from 'react-form-from-json'
import get from 'axios'

const App = () => {
  const [payload, setPayload] = useState({})
  console.log('App -> payload', payload)
  const [form, setForm] = useState({
    name: '',
    fields: []
  })

  const handleInput = (key: string, value: any) => {
    setPayload((prevPayload) => ({ ...prevPayload, [key]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
      <form
        method='post'
        id='generated-form'
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          handleSubmit(e)
        }}
      >
        <legend>{form.name}</legend>
        <Form fields={form.fields} handler={handleInput} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
