import React from 'react'
import { Button } from '@chakra-ui/react'

const ChakraUIButton = ({ colorScheme, size, className, content, onClick, isLoading }) => {
    return (
        <Button
            colorScheme={colorScheme}
            size={size}
            className={className}
            onClick={onClick}
        >
            {content}
        </Button>
    )
}

export default ChakraUIButton