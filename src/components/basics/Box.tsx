import { Flex } from '@chakra-ui/react'

interface BoxProps {
    text: string
}

export default function NewBox (props: BoxProps){
    console.log(props)
    return (
        <Flex bg="#CECECE"
        color="black"
        p={4}
        borderRadius="50%"
        h={300}
        w={300}
        align={'center'}
        justify={'center'}
        padding={20}
        margin={20}>
            {props.text}
        </Flex>
    )
}