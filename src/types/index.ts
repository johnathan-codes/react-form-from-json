export interface FormInterface {
  fields: FieldPropInterface[]
  displayUnder?: boolean
  handler: Function
}

export type FieldPropInterface = {
  name: string
  className?: string
} & (
  | {
      type: 'string'
      subtype: string
    }
  | {
      type: 'boolean'
      subtype: 'checkbox'
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
      // subtype: string
      min?: string
      max?: string
      format: string
    }
)

export interface TextFieldInterface {
  name: string
  type: string
  className?: string
  displayUnder?: boolean
  handler: Function
}

export interface CheckboxFieldInterface {
  name: string
  className?: string
  handler: Function
}

export interface RangeFieldInterface {
  name: string
  min: number
  max: number
  className?: string
  displayUnder?: boolean
  handler: Function
}

export interface RadioFieldInterface {
  name: string
  values: SelectValue[]
  className?: string
  displayUnder?: boolean
  handler: Function
}

export interface FileFieldInterface {
  name: string
  className?: string
  displayUnder?: boolean
  handler: Function
}

export interface TextAreaInterface {
  name: string
  rows?: number
  cols?: number
  className?: string
  displayUnder?: boolean
  handler: Function
}

export interface DateFieldInterface {
  name: string
  // subtype: string
  min?: string
  max?: string
  format?: string
  className?: string
  displayUnder: boolean
  handler: Function
}

export interface SelectFieldInterface {
  name: string
  values: SelectValue[]
  className?: string
  displayUnder?: boolean
  handler: Function
}

export type SelectValue = {
  key: string
  value: string
}
