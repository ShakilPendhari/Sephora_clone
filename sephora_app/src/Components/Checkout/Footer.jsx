import { Flex, Text,  } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex style={{height:"30%", 
                  backgroundColor:"black" ,
                  color:"white", 
                  margin:"auto"}} 
          padding={{base:"2rem 0rem", sm:"2rem 0rem",md:"4rem 0rem"}}
          direction="column" 
          justifyContent="center" 
          alignItems="center" 
          gap="1.3rem">
        <Flex direction={{base:"column",
                          sm:"column",
                          md:"row"}}>
            <Text>© 2023 Sephora USA, Inc. All rights reserved.</Text>
            <Text>Terms of Use|Privacy Policy</Text>
        </Flex>
        <Flex direction={{base:"column",
                          sm:"column",
                          md:"row"}}>
            <Text>1-877-737-4672|TTY: 1-888-866-9845</Text>
            <Text>customerservice@sephora.com</Text>
        </Flex>
    </Flex>
  )
}

export default Footer