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

export interface SelectFieldInterface {
  name: string
  handler: Function
  values: SelectValue[]
}

export interface TextAreaInterface {
  name: string
  handler: Function
  rows?: number
  cols?: number
}

export type SelectValue = {
  key: string
  value: string
}
