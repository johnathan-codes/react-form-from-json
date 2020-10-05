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
- Form works with following fields format
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

```tsx
import React from 'react'
import Form from 'react-form-from-json'

const Example = () => {
    return <Form fields={fields} />
}
```

## License

MIT © [johnathan-codes](https://github.com/johnathan-codes)
