import React from 'react'
import { Button as AntButton } from 'antd'

const Button = ({ type, content, style }) => {
  console.log(style)
  return (
    <AntButton
      type={type}
      className='w-100'
      style={style}
      value='large'
    >
      {content}
    </AntButton>
  )
}

export default Button