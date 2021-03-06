import React from 'react'
import { FileFieldInterface } from '../types'

const FileField = ({
  name,
  className = 'field-file',
  displayUnder,
  handler
}: FileFieldInterface) => {
  const onFileChange = (e: File) => {
    handler(name, e)
  }

  return (
    <div className={className}>
      <label htmlFor={name} className={className}>
        {name}
      </label>
      {displayUnder && <br />}
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
