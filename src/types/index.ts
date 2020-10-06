export interface FormInterface {
  fields: FieldPropInterface[]
  submitAction: Function
}

export type FieldPropInterface = {
  name: string
} & (
  | {
      type: 'string'
      inputType: string
    }
  | {
      type: 'boolean'
      inputType: 'checkbox'
    }
  | {
      type: 'select'
      values: SelectValue[]
    }
  | {
      type: 'textarea'
      rows?: number
      cols?: number
    }
  | {
      type: 'range'
      min: number
      max: number
    }
)

export interface TextFieldInterface {
  name: string
  type: string
  handler: Function
}

export interface CheckboxFieldInterface {
  name: string
  handler: Function
}

export interface RangeFieldInterface {
  name: string
  min: number
  max: number
  handler: Function
}

export interface TextAreaInterface {
  name: string
  handler: Function
  rows?: number
  cols?: number
}

export interface SelectFieldInterface {
  name: string
  handler: Function
  values: SelectValue[]
}

export type SelectValue = {
  key: string
  value: string
}
