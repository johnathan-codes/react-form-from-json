import React from 'react'
import CheckboxField from './components/CheckboxField'
import DateField from './components/DateField'
import FileField from './components/FileField'
import RadioField from './components/RadioField'
import RangeField from './components/RangeField'
import SelectField from './components/SelectField'
import TextAreaField from './components/TextAreaField'
import TextField from './components/TextField'
import { FieldPropInterface, FormInterface } from './types'

export const Form = ({
  fields,
  handler,
  displayUnder = true
}: FormInterface) => {
  const fieldSelector = (field: FieldPropInterface, index: number) => {
    switch (field.type) {
      case 'boolean':
        return (
          <CheckboxField
            name={field.name}
            displayUnder={displayUnder}
            key={index}
            handler={handler}
          />
        )
      case 'string':
        return (
          <TextField
            name={field.name}
            type={field.subtype}
            className={field.className}
            displayUnder={displayUnder}
            key={index}
            handler={handler}
          />
        )
      case 'select':
        return (
          <SelectField
            name={field.name}
            values={field.values}
            className={field.className}
            displayUnder={displayUnder}
            key={index}
            handler={handler}
          />
        )
      case 'textarea':
        return (
          <TextAreaField
            name={field.name}
            cols={field.cols}
            rows={field.rows}
            className={field.className}
            displayUnder={displayUnder}
            key={index}
            handler={handler}
          />
        )
      case 'range':
        return (
          <RangeField
            name={field.name}
            min={field.min}
            max={field.max}
            className={field.className}
            displayUnder={displayUnder}
            key={index}
            handler={handler}
          />
        )
      case 'radio':
        return (
          <RadioField
            name={field.name}
            values={field.values}
            className={field.className}
            displayUnder={displayUnder}
            key={index}
            handler={handler}
          />
        )
      case 'file':
        return (
          <FileField
            name={field.name}
            displayUnder={displayUnder}
            key={index}
            handler={handler}
          />
        )
      case 'date':
        return (
          <DateField
            name={field.name}
            // subtype={field.subtype}
            min={field.min}
            max={field.max}
            format={field.format}
            className={field.className}
            displayUnder={displayUnder}
            key={index}
            handler={handler}
          />
        )
      default:
        return <p key={index}>Not yet implemented</p>
    }
  }

  return (
    <div>
      {fields.length !== 0 &&
        fields.map((field: any, index: number) => {
          return fieldSelector(field, index)
        })}
    </div>
  )
}
