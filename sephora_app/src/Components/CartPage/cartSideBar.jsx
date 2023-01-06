import { ChevronRightIcon, InfoIcon } from '@chakra-ui/icons';
import { Box, Center, Divider, Flex, Heading, Text, Image, Button, Input, Tooltip, Toast, useToast } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthContext';
import { cartData } from './cart.api';

const CartSideBar = () => {
  const navigate = useNavigate();
  const [ promoCode, setPromoCode ] = useState("");
  const [ promo, setProme ] = useState(0)
  const toast = useToast()
  const toastIdRef = React.useRef();
  const {  setLoading, setCheckout, checkout, place } = useContext(authContext);
  const [ data, setData ] = useState(0)



  const handlePrice = ()=>{
    
    setLoading(false);
    return cartData().then(((res)=>{setData(res.reduce((sum,ele)=>{return sum+(ele.Price*ele.count1)},0)); console.log(data); setLoading(false);})).catch((err)=>{console.log(err); setLoading(false)});
  }
  useEffect(()=>{
    console.log(place)
    handlePrice();
  },[data, place]);

 

  function addToast() {
    
    toastIdRef.current = toast ({
      title: "Item Placed successfully",
      status: 'success', 
      position:"top"
  });
  navigate("/");
  setCheckout(!checkout);
}

  const handleNavigateTocheckoutPage = ()=>{
    // setCheckout(false);
    navigate("/checkout_page")
  }

  const addPromocode = ()=>{
    console.log("pc:",promoCode)
    if(promoCode==="Masai50"||promoCode==="masai50"||promoCode==="MASAI50")
    {
      setProme(50);
    }
    else if (promoCode==="ABC30")
    {
      setProme(30);
    }
    else{
      setProme(0);
    }
  }

  return (
    <Box width="100%"  >
        <Flex direction="column" 
              border="1px solid"
              borderRadius="0.3rem"
              width="100%"
              p="1rem"
              gap="1rem"
              justifyContent="space-between">
            <Flex justifyContent="space-between" 
                  alignItems="center">
                <Flex gap="1rem"
                      alignItems="center" >Merchandise Subtotal <InfoIcon/></Flex>
                <Text as="b">$ {data-promo}</Text>
            </Flex>
            <Flex justifyContent="space-between" 
                  alignItems="center">
                <Flex  gap="1rem"
                       alignItems="center">Shipping & Handling <InfoIcon/></Flex>
                <Text as="b">FREE</Text>
            </Flex>
            <Flex justifyContent="space-between" 
                  alignItems="center">
                <Text>Estimated Tax & Other Fees</Text>
                <Text as="b">TBD</Text>
            </Flex>
            <Center border="0.5rem" >
            <Divider bgColor="grey.200"/>
        </Center>
        
        <Flex justifyContent="space-between" 
              alignItems="center">
            <Heading  fontSize="xl">Estimated Total</Heading>
            <Heading fontSize="xl">$ {data - promo}</Heading>
        </Flex>
        <Text textAlign="left">or 4 payments of $54.00 with <strong>Klarna.</strong> </Text>
        <Flex textAlign="left"
              alignItems="center"
              gap="0.5rem"
             >or  <Text w={{base:"40%",
                            sm:"40%",
                            md:"20%"}}  
                        height="0.5rem">
                     <img width={{base:"30%", 
                                  sm:"35%",
                                  md:"37%"}}
                          height="0.4rem" 
                          src="https://www.sephora.com/img/ufe/logo-afterpay.svg" 
                          alt="im1"/>
                  </Text> 
                  <InfoIcon ml="0rem"/>
        </Flex>
        <Text  textAlign="left">Shipping & taxes calculated during checkout</Text>
        {
          checkout? <Button borderRadius="2rem"
                            bgColor="red"
                            color="white"
                            onClick={handleNavigateTocheckoutPage}
                            fontSize={{base:"0.5rem", 
                                      sm:"0.7rem", 
                                      md:"1.1rem"}}>Checkout Shipped Items</Button>: 
                <Button 
                   borderRadius="2rem"
                   bgColor="red"
                   disabled={place}
                   color="white"
                   onClick={addToast}
                   fontSize={{base:"0.5rem", 
                              sm:"0.7rem", 
                              md:"1.1rem"}}>Place Order</Button>
        }
      {
        checkout?  <Box m="auto"
             padding="0.3rem 0.5rem"
             border="3px solid"
             borderRadius="2rem"
             w="100%" >
        <Flex gap="1rem" 
              justifyContent="center"
              m="auto"
              >
             <Text fontSize={{base:"0.6rem", 
                              sm:"0.8rem", 
                              md:"1rem"}}>Pay With </Text> 
             <Image width={{base:"2.5rem", 
                            sm:"3.5rem", 
                            md:"6rem" }} 
                    src="https://www.sephora.com/img/ufe/logo-paypal.svg"/>
        </Flex>
        </Box>:null
      }
        
        </Flex>

       {
        !checkout? <Box   border="1px solid"
                          borderRadius="0.3rem"
                          padding={{base:"1rem", 
                                    sm:"1.02rem", 
                                    md:"2rem"}}
                          mt="1.4rem">
              <Flex justifyContent="flex-end">
                <Flex alignItems="center"
                      justifyContent="space-between">
                 <Text> View featured offers </Text>
                 <ChevronRightIcon/>
                </Flex>
              </Flex>
           
            <Flex><Input 
                  placeholder='Promo or Reward Code'
                  value={promoCode}
                  onChange={(e)=>setPromoCode(e.target.value)}
                  />
                  <Button onClick={addPromocode}>Add</Button>
                  </Flex>
        </Box>:null
       }
    </Box>
  )
}

export default CartSideBar