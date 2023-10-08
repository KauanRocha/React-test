import NewBox from "@/components/basics/Box";
import Event from "@/components/basics/Event";
import { Flex } from "@chakra-ui/react";

export default function test2 (){
    return (
        <>
        <Flex direction={"row"}>
        <NewBox text="Boxx 1"/>
        <NewBox text="Box 2"/>
        </Flex>
        <Flex direction={"row"}>
        <NewBox text="Box 3"/>
        <NewBox text="Box 4"/>
        </Flex>
        
        </>
    )
}