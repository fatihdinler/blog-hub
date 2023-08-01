import React from 'react'
import { Checkbox } from '@chakra-ui/react'

const CheckboxInput = ({ name, id, content, value, onChange }) => {
    const contentValidated = typeof content === 'string' ? content : String(content)

    return (
        <Checkbox
            size='md'
            colorScheme='green'
            defaultChecked
            name={name}
            id={id}
            value={value}
            onChange={onChange}
        >
            {contentValidated}
        </Checkbox>
    )
}

export default CheckboxInput