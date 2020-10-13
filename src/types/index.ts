export interface FormInterface {
  fields: FieldPropInterface[]
  handler: Function
}

export type FieldPropInterface = {
  name: string
} & (
  | {
      type: 'string'
      subtype: string
      className?: string
    }
  | {
      type: 'boolean'
      subtype: 'checkbox'
      className?: string
    }
  | {
      type: 'select'
      values: SelectValue[]
      className?: string
    }
  | {
      type: 'textarea'
      rows?: number
      cols?: number
      className?: string
    }
  | {
      type: 'range'
      min: number
      max: number
      className: string
    }
  | {
      type: 'radio'
      values: SelectValue[]
      className?: string
    }
  | {
      type: 'file'
      className?: string
    }
  | {
      type: 'date'
      // subtype: string
      min?: string
      max?: string
      format: string
      className?: string
    }
)

export interface TextFieldInterface {
  name: string
  type: string
  className?: string
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
  handler: Function
}

export interface RadioFieldInterface {
  name: string
  values: SelectValue[]
  className?: string
  handler: Function
}

export interface FileFieldInterface {
  name: string
  className?: string
  handler: Function
}

export interface TextAreaInterface {
  name: string
  rows?: number
  cols?: number
  className?: string
  handler: Function
}

export interface DateFieldInterface {
  name: string
  // subtype: string
  min?: string
  max?: string
  format?: string
  className?: string
  handler: Function
}

export interface SelectFieldInterface {
  name: string
  values: SelectValue[]
  className?: string
  handler: Function
}

export type SelectValue = {
  key: string
  value: string
}
