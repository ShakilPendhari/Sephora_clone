import React from 'react'
import { Button, Box, Spacer, Flex, Image, Text  } from "@chakra-ui/react"

export const Card = ({isShow5, hover_Sho5, hover_Show5}) => {
  return (
    <Box width="25rem"
    display={isShow5?"block":"none"}
    boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    padding="1rem" 
    position="relative"
    onMouseEnter={hover_Show5}
    onMouseLeave={hover_Sho5}
    right="-68%"
    top="-8rem"
    className='BoxSignIn'
    zIndex="1000"
>
       <Flex  
            direction="row"
            justifyContent="space-between"
            alignItems="center">
         <Image
               width="2rem"
               height="2rem"
               src="https://www.sephora.com/img/ufe/icons/me-active.svg"/>
               <Spacer/>
          <Flex direction="column" textAlign="left">
               <Text as="b" fontSize="17">Good Morning</Text>
               <Text>Sign in for <strong>FREE standard shipping</strong> on all orders.</Text>
          </Flex>
       </Flex>
           <Flex 
             justifyContent="space-around"
             m="1rem 0rem">
             <Box>
               <Button
               display="none"
                 borderRadius="2rem"
               backgroundColor="black"
               color="white"
               _hover={{backgroundColor:"red"}}>SignOut</Button>
             </Box>
           <Box>
           <Button     
               display="block"
               borderRadius="2rem"
               backgroundColor="black"
               color="white"
               _hover={{backgroundColor:"green"}}
           >Sign In</Button>
           </Box>
           <Spacer/>
           <Box>
           <Button 
                 display="block"
                 borderRadius="2rem"
                 backgroundColor="white"
                 border="2px solid black">Create Account</Button>
           </Box>
           </Flex>
</Box>
  )
}

export default Card