import { Box, Button, Center, Divider, Flex, Heading, Input,Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import {  InfoIcon } from '@chakra-ui/icons';
import SideBar from './Sidebar';
import Footer from './Footer';
import { authContext } from '../../Context/AuthContext';

 const Checkout = () => {
   const { formState1, setFormstate1, setPlace, place } = useContext(authContext);

   useEffect(()=>{
    setPlace( placeOrder(formState1))
   },[formState1, place])

   const handleClick = ()=>{
     console.log(formState1, place)
   }


   function placeOrder(obj){
    for(let key in obj)
    {
        if(obj[key].length===0)
        {
            
            return false
        } 
    }
    return true;
}
 

  return (
    <Box>
          <Box as="b" 
               fontSize={18} 
               mt="1rem" 
               width="100%" 
               boxShadow="1px 2px 10px green"><Text>Sephora</Text></Box>
          <Flex justifyContent="space-between"    
                padding="2rem">
       <Box width="100%" >
    <Flex direction="column"
          gap="1rem"
          justifyContent="left"
          m="1rem">
     <Heading as="h1"
              textAlign="left" 
              fontSize="2rem">Checkout</Heading>
     <Center border="1px solid black" 
             bgColor="black">
       <Divider/>
     </Center>
     <Heading textAlign="left" 
              as="h2" 
              fontSize="1rem">Shipping Address</Heading>
     <Flex gap="1rem">
        <Input placeholder='First Name*' 
               value={formState1.f_name} 
               onChange={(e)=>setFormstate1({...formState1,f_name:e.target.value})}></Input>
        <Input placeholder='Last Name*'></Input>
     </Flex>
     <Flex direction="column">
        <Input  placeholder='Phone*'
                type="number"
                value={formState1.l_name} 
                onChange={(e)=>setFormstate1({...formState1,l_name:e.target.value})}></Input>
        <Text ml="0.3rem" 
              fontSize={13}
              textAlign="left">Phone number required. Please enter your phone number.</Text>
    </Flex>
    <Text textAlign="left" 
          color="blue">Add Apt #, Floor, etc.</Text>
    <Flex justifyContent="left" 
          alignItems="flex-start" 
          gap="1rem"
          m="1.5rem 0rem " >
        <Flex direction="column" 
              justifyContent="center" 
              alignItems="center" 
              gap="1rem" >
           <Input placeholder='ZIP/Postal Code'
                  type="number"
                  value={formState1.zip} 
                  onChange={(e)=>setFormstate1({...formState1,zip:e.target.value})}
           />
           <Text fontSize={13}>ZIP Code Required. Please enter a 5 digit ZIP code.</Text>
        </Flex>
        <Box>Enter ZIP/Postal Code to see City and State/Region.</Box>
    </Flex>
    <Flex direction="column">
        <Flex >
            <Text as="b" 
                  fontSize={17}>Ship to FedEx Pickup Location
</Text> <InfoIcon/>
        </Flex>
        <Text textAlign="left" 
              color="blue" 
              _hover={{textDecoration:"underline", 
                       cursor:"pointer"}}>Select a location near you</Text>
    </Flex>
    <Button w={{base:"50%", 
                sm:"50%",
                md:"20%"}}
            borderRadius="2rem" 
            bgColor="black" 
            onClick={()=>{handleClick(); setPlace(true)}}
            color="white"
            _hover={{textDecoration:"underline", cursor:"pointer"}}>Save & Continue</Button>
    </Flex>
       </Box>
    <SideBar/>
  </Flex>
     <Footer/>
    </Box>
  
 
  )
}

export default Checkout