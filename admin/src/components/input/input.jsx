import React from 'react'
import { Input as AntInput } from 'antd'

const Input = ({ placeholder, helperText, type }) => {
  return (
    <div className='mb-3'>
      {
        helperText && <p className='mb-1'>{helperText}</p>
      }
      <AntInput 
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

export default Input