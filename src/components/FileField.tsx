import React from 'react'
import { FileFieldInterface } from '../types'

const FileField = ({ name, handler }: FileFieldInterface) => {
  const onFileChange = (e: File) => {
    handler(name, e)
  }

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type='file'
        id={name}
        onChange={(e) => {
          if (e.target.files !== null) {
            onFileChange(e.target.files[0])
          }
        }}
      />
    </div>
  )
}

export default FileField
