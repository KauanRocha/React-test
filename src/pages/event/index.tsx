import NewBox from "@/components/basics/Box";
import Event from "@/components/basics/Event";
import { Flex } from "@chakra-ui/react";

export default function event (){
    return (
        <>
        <Flex direction={"row"}>
        <Event/>
        <Event/>
        <Event/>
        </Flex>
        <Flex direction={"row"}>
        <Event/>
        <Event/>
        <Event/>
        </Flex>
        
        </>
    )
}