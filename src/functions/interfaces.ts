export interface FormInterface {
  fields: FieldPropInterface[]
  submitAction: Function
}

export interface FieldPropInterface {
  name: string
  inputType: string
  type: String | Boolean | Date | Number
}

export interface FieldInterface {
  name: string
  type: string
  handler: Function
  inputType: string
}
