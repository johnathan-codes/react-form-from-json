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

## Usage

#### Example code with axios request (response json shown below)

```tsx
import React, { useEffect, useState } from 'react'
import { url } from './helpers'
import get from 'axios'
import { Form } from 'react-form-from-json'

const App = () => {
  const [fields, setFields] = useState([])
  useEffect(() => {
    get(url, {
      method: 'GET'
    }).then((res: any) => {
      setFields(res.data)
    })
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>, payload: {}) => {
    e.preventDefault()
    console.log('HandleSubmit -> payload', payload)
  }

  return <Form fields={fields} submitAction={handleSubmit} />
}

export default App
```

Form works with following fields formats

#### Array

```tsx
const fields = [
  {
    name: 'Dummy checkbox',
    type: 'checkbox'
  },
  {
    name: 'Dummy color',
    type: 'color'
  }
]
```

#### JSON (with example input types)

```json
{
  "fields": [
    {
      "name": "Dummy email",
      "inputType": "email",
      "type": "text"
    },
    {
      "name": "Dummy number",
      "inputType": "number",
      "type": "text"
    },
    {
      "name": "Dummy password",
      "inputType": "password",
      "type": "text"
    },
    {
      "name": "Dummy search",
      "inputType": "search",
      "type": "text"
    },
    {
      "name": "Dummy tel",
      "inputType": "tel",
      "type": "text"
    },
    {
      "name": "Dummy text",
      "inputType": "text",
      "type": "text"
    },
    {
      "name": "Dummy url",
      "tyinputTypepe": "url",
      "type": "text"
    }
  ]
}
```

#### Rendered

![rendered-form](https://user-images.githubusercontent.com/42937562/95061761-52772f80-06fc-11eb-8d62-acc3003eb2fe.png)

## Roadmap

- [x] Arrays
- [x] JSON
- [x] Change state of field
- [x] Fill payload
- [x] Form submit action
- [ ] Default values
- [ ] Input types
  - [ ] Date inputs
    - [ ] Date
    - [ ] Datetime local
    - [ ] Month
    - [ ] Time
    - [ ] Week
  - [ ] Selectors
    - [ ] Checkbox
    - [ ] Color
    - [ ] File
    - [ ] Radio
    - [ ] Range
  - [x] Text - basic text inputs
    - [x] Text
    - [x] Email
    - [x] URL
    - [x] Tel
    - [x] Number
    - [x] Password
    - [x] ~~Search~~
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
