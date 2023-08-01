import React from 'react'
import { Input } from '@chakra-ui/react'

const ChakraUIInput = ({ type, name, autoComplete, required, value, onChange, placeholder }) => {
	const placeholderValidator = typeof placeholder === 'string' ? placeholder : String(placeholder)
	
	return (
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
	)
}

export default ChakraUIInput