export interface FormInterface {
  fields: FieldPropInterface[]
  submitAction: Function
}

export interface FieldPropInterface {
  name: string
  type:
    | StringConstructor
    | BooleanConstructor
    | NumberConstructor
    | DateConstructor
  inputType: string
}

export interface FieldInterface {
  name: string
  type:
    | StringConstructor
    | BooleanConstructor
    | NumberConstructor
    | DateConstructor
  inputType: string
  handler: Function
}
