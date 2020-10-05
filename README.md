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
  return <Form fields={fields} />
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
      "name": "Dummy checkbox",
      "type": "checkbox"
    },
    {
      "name": "Dummy color",
      "type": "color"
    },
    {
      "name": "Dummy date",
      "type": "date"
    },
    {
      "name": "Dummy datetime-local",
      "type": "datetime-local"
    },
    {
      "name": "Dummy email",
      "type": "email"
    },
    {
      "name": "Dummy file",
      "type": "file"
    },
    {
      "name": "Dummy hidden",
      "type": "hidden"
    },
    {
      "name": "Dummy image",
      "type": "image"
    },
    {
      "name": "Dummy month",
      "type": "month"
    },
    {
      "name": "Dummy number",
      "type": "number"
    },
    {
      "name": "Dummy password",
      "type": "password"
    },
    {
      "name": "Dummy radio",
      "type": "radio"
    },
    {
      "name": "Dummy range",
      "type": "range"
    },
    {
      "name": "Dummy reset",
      "type": "reset"
    },
    {
      "name": "Dummy search",
      "type": "search"
    },
    {
      "name": "Dummy submit",
      "type": "submit"
    },
    {
      "name": "Dummy tel",
      "type": "tel"
    },
    {
      "name": "Dummy text",
      "type": "text"
    },
    {
      "name": "Dummy time",
      "type": "time"
    },
    {
      "name": "Dummy url",
      "type": "url"
    },
    {
      "name": "Dummy week",
      "type": "week"
    }
  ]
}
```

#### Rendered

![rendered-form](https://user-images.githubusercontent.com/42937562/95061761-52772f80-06fc-11eb-8d62-acc3003eb2fe.png)

## Roadmap

- [x] Arrays
- [x] JSON
- [ ] Change state of field
- [ ] Fill payload
- [ ] Form submit action
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
  - [ ] Text
    - [ ] Text
    - [ ] Email
    - [ ] URL
    - [ ] Tel
    - [ ] Number
    - [ ] Password
    - [ ] ~~Search~~
  - [ ] MISC
    - [ ] ~~Hidden~~
    - [ ] ~~Reset~~
    - [ ] ~~Submit~~

## License

MIT © [johnathan-codes](https://github.com/johnathan-codes)
