import { Heading, Center, Flex } from "@chakra-ui/react";
import { Divider, Box , Image } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';



const Register = () => {
 
  return (
    <div style={{backgroundColor:"white"}}>
        <Flex justifyContent="space-between" alignItems="center" padding={3}>
           <Flex flex={3} justifyContent="center">
           <Heading fontFamily= {"Helvetica Neue Helvitica arial sans-serif"} as="h2" fontSize={17} color="black">Create an Account</Heading>
           </Flex>
           <Flex style={{boxSize:"borderBox", }}>
           <CloseIcon mr="2rem" style={{boxSize:"borderBox"}} onClick={()=>console.log("Hii")} color="black"/>
           </Flex>
        </Flex>
        <Center height='3px' mt={3}>
           <Divider color="red" border="2" orientation='horizontal' />
        </Center>
        <Box  boxSize='200px'  mt={4}>
  <Image src='https://www.sephora.com/img/ufe/bi/logo-beauty-insider.svg' alt='Beauty Insider' />
</Box>
    </div>
  )
}

export default Register
