import React, { FormEvent, useState } from 'react'
import CheckboxField from './components/CheckboxField'
import DateField from './components/DateField'
import FileField from './components/FileField'
import RadioField from './components/RadioField'
import RangeField from './components/RangeField'
import SelectField from './components/SelectField'
import TextAreaField from './components/TextAreaField'
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
        return <CheckboxField name={field.name} key={index} handler={handler} />
      case 'string':
        return (
          <TextField
            name={field.name}
            type={field.subtype}
            key={index}
            className={field.className}
            handler={handler}
          />
        )
      case 'select':
        return (
          <SelectField
            name={field.name}
            values={field.values}
            key={index}
            className={field.className}
            handler={handler}
          />
        )
      case 'textarea':
        return (
          <TextAreaField
            name={field.name}
            cols={field.cols}
            rows={field.rows}
            key={index}
            className={field.className}
            handler={handler}
          />
        )
      case 'range':
        return (
          <RangeField
            name={field.name}
            min={field.min}
            max={field.max}
            key={index}
            className={field.className}
            handler={handler}
          />
        )
      case 'radio':
        return (
          <RadioField
            name={field.name}
            values={field.values}
            key={index}
            className={field.className}
            handler={handler}
          />
        )
      case 'file':
        return <FileField name={field.name} handler={handler} key={index} />
      case 'date':
        return (
          <DateField
            name={field.name}
            // subtype={field.subtype}
            min={field.min}
            max={field.max}
            format={field.format}
            key={index}
            className={field.className}
            handler={handler}
          />
        )
      default:
        return <p key={index}>Not yet implemented</p>
    }
  }

  return (
    <div>
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
