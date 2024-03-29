import { Flex, Heading, Text, Input, FormControl, Checkbox, HStack, Button, ButtonGroup, InputGroup, InputRightElement, Tooltip, Box } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react';
import { CloseIcon, ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import { HiOutlineInformationCircle } from "react-icons/hi";
import "./SignIn.css"
import { authContext } from '../../Context/AuthContext';



const SignIn = () => {
 const [ visibily, setVisibility ] = useState("password");
 const [display ,setDisplay ] = useState(true);
 const [ data, setData ] = useState({
    email:"",
    password:"",
    flag:false,
 });
//  const { localStorage, setLocalStorage } = useContext(authContext);

const handleVisibility = ()=>{
    
    if(visibily==="password")
    {
        setVisibility("text")
    }
    else{
        setVisibility("password")
    }
}
const handleSignIn = ()=>{
    if(display===true)
    {
        setDisplay(false);
    }
    else{
        setDisplay(true)
    }
}

const handleSubmit = (e)=>{
   e.preventDefault();
   console.log(data)
}

const handleChange = (e)=>{
   const { name, value, type, checked} = e.target
   const val =  type === "checkbox" ? checked : value
    setData({...data, [name]:val});
    console.log(e.target.value)
}

// useEffect(()=>{
    
// },[])


if(!display)
{
    return <div style={{display:"none"}}></div>
}
  return (
    <div className='sign' >
        <Flex 
             direction='column' 
             p={5} 
             gap={5}
             className="flex"
             >
            <Flex justifyContent="space-between" alignItems='center'>
               <Heading 
                     as='h2' 
                     fontSize={16}>Sign In</Heading>
               <CloseIcon 
                        width={2.5} 
                        onClick={handleSignIn}
                        height={2.5}/>
            </Flex>
            <Text  
                textAlign='left'
                fontSize={14}>Sign in or create an account to enjoy <strong> FREE standard shipping</strong> on all orders.</Text>
            <FormControl m="0rem 0rem 6rem">
                <Input 
                      border = "2px solid" 
                      m="1rem 0rem 0.5rem 0rem" placeholder='Email Address*'
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                      />
                <InputGroup>
                    <Input  
                         m="0.5rem 0rem 1rem 0rem"     placeholder='Password*'
                         type={visibily}
                         name="password"
                         value = {data.password}
                         onChange={handleChange}
                     />
                    {
                        visibily==="password"? <InputRightElement 
                           onClick={handleVisibility} children={<ViewOffIcon />} 
                           mt="1.2%"
                           />:
                        <InputRightElement 
                           onClick={handleVisibility} children={<ViewIcon />}
                           mt="1.2%" />
                    }
                   
                    
                </InputGroup>
               
                <Flex justifyContent="space-between">
              <HStack>
                 <Checkbox 
                 defaultChecked={false}
                 name="flag"
                 value = {data.flag}
                 onChange={handleChange}></Checkbox>
                 <label>Keep me signed in</label>
                 <Tooltip 
                      backgroundColor="blackAlpha.900"
                      p="0.5rem 0.25rem 0.7rem 1rem"
                      borderRadius={11}
                      fontSize={12}
                      hasArrow  
                      label="selecting this option means you won't have to sign in as often on this device. For your security, we recommend only doing this on your personal devices." 
                      placement="top">
                   <Box>
                      <HiOutlineInformationCircle/>
                   </Box>
                 </Tooltip> 
                 
              </HStack>

             <Button 
                   colorScheme='blue' 
                   variant='link' >Forget password?</Button>
            </Flex>
             <Flex m="1.5rem 0rem 2.5rem 0rem">
             <Button
                   onClick={handleSubmit}
                   color="white" 
                   backgroundColor="black" variant="solid"
                   borderRadius="2rem"
                   width="12rem"
                   _hover={{backgroundColor:"green.400"}}>Sign In</Button>
             </Flex>
             <hr/>
             <Flex m="2rem 0rem">
               <Heading as='h2' fontSize={16}>New to Sephora?</Heading>
             </Flex>
           
            <Flex>
              <Button 
                  border="2px solid rgb(10 10 10)" borderRadius="2rem"
                  width="12rem"
                  _hover={{backgroundColor:"blue.300"}}
                  >Create Account</Button>
            </Flex>
            </FormControl>
            
            <ButtonGroup w="20rem" m="auto" pl="3.5rem">
               <Button  colorScheme='blue' variant='link' > Terms of Use </Button>& 
               <Button  colorScheme='blue' variant='link'>Privacy Policy</Button>
            </ButtonGroup>
            
        </Flex>
    </div>
  )
}

export default SignIn