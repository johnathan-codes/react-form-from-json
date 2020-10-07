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
  | {
      type: 'radio'
      values: SelectValue[]
    }
  | {
      type: 'file'
    }
  | {
      type: 'date'
      subtype: string
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

export interface RadioFieldInterface {
  name: string
  values: SelectValue[]
  handler: Function
}

export interface FileFieldInterface {
  name: string
  handler: Function
}

export interface TextAreaInterface {
  name: string
  rows?: number
  cols?: number
  handler: Function
}

export interface DateFieldInterface {
  name: string
  subtype: string
  handler: Function
}

export interface SelectFieldInterface {
  name: string
  values: SelectValue[]
  handler: Function
}

export type SelectValue = {
  key: string
  value: string
}
