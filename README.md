# react-form-from-json

> Create dynamic forms from json config file

[![NPM](https://img.shields.io/npm/v/react-form-from-json.svg)](https://www.npmjs.com/package/react-form-from-json) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```
npm i react-form-from-json
```

or

```
yarn add react-form-from-json
```

## Dev

In root run with concurrently (which is installed globally `npm i -g concurrently`)
`concurrently "yarn start" "cd example && yarn start" "cd example && json-server --watch example-json.json --port 3100"`

## Usage

#### Example code with axios request (response json shown below)

```tsx
import React, { FormEvent, useEffect, useState } from 'react'
import { Form } from 'react-form-from-json'
import get from 'axios'

const App = () => {
  const [payload, setPayload] = useState({})
  const [form, setForm] = useState({
    name: '',
    fields: []
  })

  const handleInput = (key: string, value: any) => {
    setPayload((prevPayload) => ({ ...prevPayload, [key]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //Submit Action
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
```

Form works with following fields formats

#### JSON (with currently working input types)

Full example json is in [`example\example-json.json`](https://github.com/johnathan-codes/react-form-from-json/blob/master/example/example-json.json)

```json
{
  ...some other properties,
  "form": {
    "name": "Some Dummy Form",
    "fields": [
      {
        "name": "Dummy email",
        "subtype": "email",
        "type": "string"
      },
      {
        "name": "Dummy number",
        "subtype": "number",
        "type": "string"
      },
      {
        "name": "Dummy password",
        "subtype": "password",
        "type": "string"
      },
      {
        "name": "Dummy search",
        "subtype": "search",
        "type": "string"
      },
      {
        "name": "Dummy tel",
        "subtype": "tel",
        "type": "string"
      },
      {
        "name": "Dummy text",
        "subtype": "text",
        "type": "string"
      },
      {
        "name": "Dummy url",
        "subtype": "url",
        "type": "string"
      },
      {
        "name": "Dummy checkbox",
        "subtype": "checkbox",
        "type": "boolean",
        "className": "some dummy class"
      },
      {
        "name": "Dummy select",
        "type": "select",
        "values": [
          {
            "key": "key-1",
            "value": "Value 1"
          },
          {
            "key": "key-2",
            "value": "Value 2"
          },
          {
            "key": "key-3",
            "value": "Value 3"
          },
          {
            "key": "key-4",
            "value": "Value 4"
          }
        ]
      },
      {
        "name": "Dummy textarea",
        "type": "textarea",
        "rows": 4,
        "cols": 20
      },
      {
        "name": "Dummy textarea no cols, no rows",
        "type": "textarea"
      },
      {
        "name": "Dummy range",
        "type": "range",
        "min": 0,
        "max": 10
      },
      {
        "name": "Dummy radio",
        "type": "radio",
        "values": [
          {
            "key": "rad1",
            "value": "Value 1"
          },
          {
            "key": "rad2",
            "value": "Value 2"
          }
        ]
      },
      {
        "name": "Dummy file",
        "type": "file"
      },
      {
        "name": "Dummy date",
        "type": "date",
        "subtype": "date",
        "min": "2020-10-05",
        "max": "2020-11-01",
        "format": "dd. MM. yyyy",
        "className": "some dummy class"
      },
      {
        "name": "Dummy color",
        "type": "string",
        "subtype": "color"
      }
    ]
  }
}
```

#### CSS (index.css of App)

```css
.field-text div {
  width: 1000px;
}
.field-text input {
  height: 1.5vh;
}
.field-text label {
  color: green;
}

.field-area div {
  width: 1000px;
}
.field-area input {
  height: 1.5vh;
}
.field-area label {
  color: violet;
}

.field-select div {
  width: 1000px;
}
.field-select select {
  height: 1.5vh;
}
.field-select option {
  height: 1.5vh;
}
.field-select label {
  color: brown;
}

.field-range div {
  width: 1000px;
}
.field-range input {
  height: 1.5vh;
}
.field-range label {
  color: blanchedalmond;
}

.field-radio div {
  width: 100px;
}
.field-radio input {
  height: 1.5vh;
}
.field-radio p {
  color: tomato;
}
.field-radio label {
  color: aquamarine;
}

.field-file div {
  width: 1000px;
}
.field-file input {
  height: 1.5vh;
}
.field-file label {
  color: yellowgreen;
}

.field-date div {
  width: 1000px;
}
.field-date input {
  height: 1.5vh;
}
.field-date label {
  color: red;
}

.field-checkbox div {
  width: 1000px;
}
.field-checkbox input {
  height: 1.5vh;
}
.field-checkbox label {
  color: bisque;
}
```

##### Added custom class names for each field

You can add the class name into the json

```json
{
  "name": "Dummy checkbox",
  "subtype": "checkbox",
  "type": "boolean",
  "className": "some dummy class"
}
```

or just expand field array before passing it down as props

#### Rendered

![rendered-form](https://user-images.githubusercontent.com/42937562/95846670-fdff3000-0d4b-11eb-8a6f-71d51d6f9354.png)

## Roadmap

- [ ] ~~Arrays~~
- [x] JSON
- [x] Change state of field
- [x] Fill payload
- [x] Form submit action
- [x] ClassNames
  - [x] Default ClassNames
  - [x] Custom ClassNames
  - [ ] Global ClassNames
- [ ] Default values
- [ ] Input types
  - [ ] Date inputs
    - [x] Date
      - [x] Formats
      - [x] Min - Max
      - [ ] Exclude dates
      - [ ] Include dates
      - [ ] Filter dates
      - [ ] Higligh dates
      - [ ]
  - [ ] Selectors
    - [x] Select
    - [x] Checkbox
    - [ ] Color
    - [x] File
    - [x] Radio
    - [ ] Range
      - [x] Min - Max
      - [ ] [Datalist](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#A_range_control_with_hash_marks_and_labels)
  - [x] Text inputs
    - [x] Text
    - [x] Email
    - [x] URL
    - [x] Tel
    - [x] Number
    - [x] Password
    - [x] TextArea
    - [ ] ~~Search~~
  - [ ] MISC
    - [ ] ~~Hidden~~
    - [ ] ~~Reset~~
    - [ ] ~~Submit~~
- [ ] (Optional) Validators
  - [ ] Email
  - [ ] Tel
  - [ ] Password
  - [ ] Number

## License

MIT © [johnathan-codes](https://github.com/johnathan-codes)
