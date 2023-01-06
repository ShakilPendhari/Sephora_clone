import { Image,Input, Spacer, Tooltip} from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom"
import { Flex, InputGroup, InputLeftElement,Text, Box, Button} from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons';
import { MdOutlineHomeWork, MdMapsHomeWork } from "react-icons/md";
import { useContext, useState } from 'react';
import "./Navbar.css"
import { FaComment, FaRegComment, FaHeart } from "react-icons/fa"
import { FiHeart } from "react-icons/fi"

import { Nav } from "./Data"
import SignIn from '../../Routes/SignIn/SignIn';
import Register from '../../Routes/Register/Register';
import React,{ useEffect } from 'react'
import { cartData } from '../CartPage/cart.api';
import { authContext } from '../../Context/AuthContext';
import CartAdded from './cartAdded';
// import { Card } from "./Card"





const Navbar = () =>  {
    const { countcart, setCart } = useContext(authContext);
    const [ isShow, setIsShown ] = useState(false);
    const [ isShow1, setIsShown1] = useState(false);
    const [ isShow2, setIsShown2] = useState(false);
    const [ isShow3, setIsShown3] = useState(false);
   
    const [ isShow5, setIsShown5] = useState(false);
    const [ showSign, setShowSign] = useState(false);
    const [ reg, setreg] = useState(false);
    const { localstorage, setlocalStorage,formstate,count } = useContext(authContext);

    const hover_Show = ()=>{ setIsShown(true); }
    const hover_Sho = ()=>{ setIsShown(false); }

    const hover_Show1 = ()=>{ setIsShown1(true); setIsShown5(true) }
    const hover_Sho1 = ()=>{ setIsShown1(false); setIsShown5(true) }

    const hover_Show2 = ()=>{ setIsShown2(true) }
    const hover_Sho2 = ()=>{ setIsShown2(false) }

    const hover_Show3 = ()=>{ setIsShown3(true) }
    const hover_Sho3 = ()=>{ setIsShown3(false) }

    const hover_Show5 = ()=>{ setIsShown5(true) }
    const hover_Sho5 = ()=>{ setIsShown5(false) }


    
    useEffect(()=>{
      cartData().then((res)=>setCart(res.length));
      console.log(localstorage)
  },[localstorage, countcart,formstate,count])


    const showSignIn = ()=>{
         setShowSign(!showSign)
    }
    const setShowRegister = ()=>{
         setreg(!reg)
    }


       return <Box position="sticky"
                   top="0px"
                   zIndex="2000"
                   bgColor="white"
                   boxshadow="10px 10px 10px green">
       <Box  padding="0.05rem 0rem">
       <Flex 
              
              m="1rem 2rem"
              justifyContent="space-between"
              // gap="1rem"
              height="3rem"
              flexWrap="wrap">
         <Box>
            <Link to="/">
                 <Image
               src="/cp.png" 
               alt="sephora"
               width="45px"
               height="45px"
               borderRadius="2rem"
               />
            </Link>
         </Box>
         <Box>
         <InputGroup>
         <InputLeftElement
           children={<Search2Icon color='gray.300' mt="0rem" />}
           />
           <Input  
                 type='text' 
                 placeholder='Search'
                 width={["7rem","12rem","17rem"]}
                 borderRadius="2rem"
                  />
         </InputGroup>

         </Box> 
                 <Flex display={{base:"none",sm:"none",md:"flex"}}
                       width={{base:"4rem",sm:"5rem",md:"13rem"}}
                       fontSize={{base:"0.5rem"}} >
                 <Box 
                      display={isShow?"none":"block"}
                      height="10rem">
                   <MdOutlineHomeWork 
                      onMouseEnter={hover_Show}
                      onMouseLeave={hover_Sho}
                 />
                 </Box>
                 <Box 
                      display={!isShow?"none":"block"}
                      height="100px">
                       <MdMapsHomeWork
                       onMouseEnter={hover_Show}
                       onMouseLeave={hover_Sho}
                       />
                 </Box>
                 <Box>
                    <Text fontSize={{base:"12",sm:"14",md:"16"}}>Stores & Services</Text>
                    <Text fontSize={{base:"12",sm:"14",md:"16"}}>Choose You Store</Text>
                 </Box>
                 </Flex>
               <Flex className='signIn'
                     justifyContent="center"
                     textAlign="left"
                      direction={{base:"column",sm:"column",md:"row"}}
                      width={{base:"4rem",sm:"5rem",md:"13rem"}}>
               <Image  
                       width="3rem"
                       height="3rem"
                       display={isShow1?"none":"block"}
                       onMouseEnter={hover_Show1}
                       onMouseLeave={hover_Sho1} src="https://www.sephora.com/img/ufe/icons/me32.svg" />
               <Image  
                       width="3rem"
                       height="3rem"
                       display={!isShow1?"none":"block"}
                       onMouseEnter={hover_Show1}
                       onMouseLeave={hover_Sho1} src="https://www.sephora.com/img/ufe/icons/me-active.svg" />
                      <Box  direction="column"
                            justifyContent="left" ml="0.5rem">
                        <Text as="b" fontSize={16}>Sign In</Text>
                        <Text fontSize={14}> { localstorage? " hello " + localstorage : "for Free Shiping"} </Text>
                      </Box>
               </Flex>
               <Flex>
                   <Box 
                       width="3rem"
                       height="2rem"
                       onMouseEnter={hover_Show2}
                       onMouseLeave={hover_Sho2} >
                       <Box display={isShow2?"none":"block"}><FaRegComment/></Box>
                       <Box  display={!isShow2?"none":"block"}> <FaComment/></Box>
                   </Box>
                   <Box 
                       width="3rem"
                       height="2rem"
                       onMouseEnter={hover_Show3}
                       onMouseLeave={hover_Sho3} >
                       <Box  display={isShow3?"none":"block"}>
                         <FiHeart />
                       </Box>
                       <Box display={!isShow3?"none":"block"}>
                       <FaHeart  />
                       </Box>
                   </Box>
                    <CartAdded />
               </Flex>
              
      </Flex>
      {showSign && <SignIn/>}
               {reg && <Register/>}
               <Flex 
                   bg="black" 
                   color="white" 
                   p="1rem" 
                   display={["none","none","flex"]}
                   justifyContent="space-around" 
                   flexWrap="wrap">
             {
               Nav?.map((item,i)=><Text key={item} _hover={{textDecoration:"underline", color:"green", cursor:"default"}}  as="b">{item}</Text>)
             }
         </Flex>
         <Box  width="25rem"
               display={isShow5?"block":"none"}
               boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
               padding="1rem" 
               position="absolute"
               onMouseEnter={hover_Show5}
               onMouseLeave={hover_Sho5}
               right="3rem"
               top="3rem"
               className='BoxSignIn'
               zIndex="1000"
               backgroundColor="white"
>
      <Flex  
           direction="row"
           // justifyContent="space-between"
           alignItems="center"
           gap="0.3rem">
        <Image
              width="2rem"
              height="2rem"
              src="https://www.sephora.com/img/ufe/icons/me-active.svg"/>
              <Spacer/>
         <Flex direction="column" 
               textAlign="left" 
               justifyContent="left">
              <Text as="b" fontSize="17">Good Morning</Text>
              <Text>Sign in for <strong>FREE standard shipping</strong> on all orders.</Text>
         </Flex>
      </Flex>
          <Flex>
            {
              localstorage?  <Box  m="auto">
              <Button
                display="block"
                borderRadius="2rem"
                backgroundColor="black"
                color="white"
                _hover={{backgroundColor:"red"}}
               
                onClick={()=>{setlocalStorage(""); localStorage.removeItem("key"); console.log(localStorage)}}>SignOut</Button>
            </Box>: <Flex justifyContent="space-between"
            m="0.5rem 0rem" 
            gap="3rem">
            <Box>
               <Button     
                   display="block"
                   borderRadius="2rem"
                   backgroundColor="black"
                   color="white"
                   _hover={{backgroundColor:"green"}}
                   onClick={showSignIn}
               >Sign In</Button>
          </Box>
          <Spacer/>
          <Box>
             <Button 
                   onClick={setShowRegister}
                   display="block"
                   borderRadius="2rem"
                   backgroundColor="white"
                   border="2px solid black">Create Account</Button>
          </Box>
            </Flex> 
            
            }
           
          
          </Flex>
</Box>
       </Box>
       </Box>
         
        
    }

export default Navbar