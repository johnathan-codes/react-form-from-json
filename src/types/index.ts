export interface FormInterface {
  fields: FieldPropInterface[]
  submitAction: Function
}

export interface FieldPropInterface {
  name: string
  type: string
  inputType: string
}

export interface FieldInterface {
  name: string
  type: string
  handler: Function
}
