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
)

export interface FieldInterface {
  name: string
  type: string
  handler: Function
}
