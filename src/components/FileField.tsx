import React from 'react'
import { FileFieldInterface } from '../types'

const FileField = ({ name, handler }: FileFieldInterface) => {
  const onFileChange = (e: File) => {
    handler(name, e)
  }

  return (
    <div className='field-file'>
      <label htmlFor={name} className='field-file'>
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
        className='field-file'
      />
    </div>
  )
}

export default FileField
