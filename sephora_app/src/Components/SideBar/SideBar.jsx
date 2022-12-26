import { Box, Flex, Text, Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import { SideBarInfo } from './Data';

const SideBar = () => {
  return (
    <Flex direction="column" textAlign="left" width="8rem">
            <Heading as="h2" fontSize={16} m="1rem 0rem">New</Heading> 
            <hr bg="black"/>
            <Heading fontSize={22} m="1rem 0rem 0.7rem 0rem">New</Heading>
            {
                SideBarInfo?.map((item)=>(
                    <Text _hover={{fontWeight:"600", cursor:"default"}} fontSize={18} key={item}>{item}</Text>
                ))
            }
            <Box mt="1rem" br="black" > <hr bg="black" border="2px solid gray.900" /></Box>
    </Flex>
  )
}

export default SideBar