import { Button } from "@chakra-ui/react"

export default function Event () {
    let number = 0 

    function increment() {
        console.log(number++)
    }

    return (
        <Button onClick={increment}
        h={100}
        w={100}
        borderRadius="30%"
        p={10}
        m={10}
        >
            Event
        </Button>
    )
}