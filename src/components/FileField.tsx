import React from 'react'
import { FileFieldInterface } from '../types'

const FileField = ({
  name,
  className = 'field-file',
  handler
}: FileFieldInterface) => {
  console.log('FileField -> className', className)
  const onFileChange = (e: File) => {
    handler(name, e)
  }

  return (
    <div className={className}>
      <label htmlFor={name} className={className}>
        {name}
      </label>
      <input
        type='file'
        id={name}
        onChange={(e) => {
          if (e.target.files !== null) {
            onFileChange(e.target.files[0])
          }
        }}
        className={className}
      />
    </div>
  )
}

export default FileField
