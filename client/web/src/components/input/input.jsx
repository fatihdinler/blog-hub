import React from 'react'
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


const ChakraUIInput = ({ type, name, autoComplete, required, value, onChange, placeholder, showPassword, showPasswordHandler, isVisibilityIconValid }) => {
	const placeholderValidator = typeof placeholder === 'string' ? placeholder : String(placeholder)

	return (
		<InputGroup>
			<Input
				className='w-full px-3 py-2 rounded shadow-sm'
				placeholder={placeholderValidator}
				size='md'
				type={type}
				name={name}
				autoComplete={autoComplete}
				required={required ? required : false}
				value={value}
				onChange={onChange}
			/>
			{
				isVisibilityIconValid && (
					<InputRightElement className='w-3'>
						<button onClick={showPasswordHandler}>
							{
								showPassword ? (
									<AiOutlineEye />
								) : (
									<AiOutlineEyeInvisible />
								)
							}
						</button>
					</InputRightElement>
				)
			}
		</InputGroup>
	)
}

export default ChakraUIInput