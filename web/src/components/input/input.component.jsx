import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { setIsPasswordVisible } from '../../features/ui/input'

const Input = ({ name, type, value, placeholder, id, icon, helperText }) => {
  const dispatch = useDispatch()
  const { isPasswordVisible } = useSelector(state => state.input)

  if (!icon) {
    icon = `fi-br-question`
  }

  const onChangePasswordVisibility = () => {
    dispatch(setIsPasswordVisible())
  }


  return (
    <div className='relative w-[100%] mb-4'>
      {helperText && (
        <p className='font-bold text-sm mb-2 ml-1'>{helperText}</p>
      )}
      <div className='relative'>
        <input
          id={id}
          name={name}
          type={type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type}
          placeholder={placeholder}
          defaultValue={value}
          className='input-box pl-10'
        />
        <div className='absolute left-3 top-1/2 transform -translate-y-1/2 mt-0.5 ml-1'>
          <i className={`${`fi`} ${icon}`}></i>
        </div>

        {
          type === 'password' && (
            <i
              className={`fi fi-rr-eye${!isPasswordVisible ? `-crossed` : ``} input-icon left-[auto] right-4 cursor-pointer`}
              onClick={onChangePasswordVisibility}>
            </i>
          )
        }
      </div>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  helperText: PropTypes.string,
}

export default Input
