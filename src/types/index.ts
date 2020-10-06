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
)

export interface FieldInterface {
  name: string
  type: string
  handler: Function
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
