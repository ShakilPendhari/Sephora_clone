import { Heading, Image,Input, Spacer} from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { Flex, InputGroup, InputLeftElement,Text, Box, Button} from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons';
import { MdOutlineHomeWork, MdMapsHomeWork } from "react-icons/md";
import { useState } from 'react';
import "./Navbar.css"
import { FaComment, FaRegComment, FaHeart } from "react-icons/fa"
import { FiHeart } from "react-icons/fi"
import { RiShoppingBasketFill, RiShoppingBasketLine  } from "react-icons/ri"


const Navbar = () =>  {
    const [ isShow, setIsShown ] = useState(false);
    const [ isShow1, setIsShown1] = useState(false);
    const [ isShow2, setIsShown2] = useState(false);
    const [ isShow3, setIsShown3] = useState(false);
    const [ isShow4, setIsShown4] = useState(false);

    const hover_Show = ()=>{ setIsShown(true); }
    const hover_Sho = ()=>{ setIsShown(false); }

    const hover_Show1 = ()=>{ setIsShown1(true) }
    const hover_Sho1 = ()=>{ setIsShown1(false) }

    const hover_Show2 = ()=>{ setIsShown2(true) }
    const hover_Sho2 = ()=>{ setIsShown2(false) }

    const hover_Show3 = ()=>{ setIsShown3(true) }
    const hover_Sho3 = ()=>{ setIsShown3(false) }

    const hover_Show4 = ()=>{ setIsShown4(true) }
    const hover_Sho4 = ()=>{ setIsShown4(false) }


       return <Box position="static">
        <Flex m="1rem 2rem"
               justifyContent="space-between"
               gap="1rem"
               flexWrap="wrap">
          <Box>
          <Image
           src="https://document-export.canva.com/apFwU/DAFUtmapFwU/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221219%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221219T033717Z&X-Amz-Expires=54675&X-Amz-Signature=b75d3afc12d6421f540f8f9f1c6e3313ee5d0271297b8c8b6dc7acc3310e0f1c&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2019%20Dec%202022%2018%3A48%3A32%20GMT" 
           alt="sephora"
           width="45px"
           height="45px"
           borderRadius="2rem"
          />
          </Box>
          <Box>
          <InputGroup>
          <InputLeftElement
            children={<Search2Icon color='gray.300' mt="0rem" />}
            />
            <Input  
                  type='text' 
                  placeholder='Search'
                  width={["15rem","15rem","25rem"]}
                  borderRadius="2rem"
                   />
          </InputGroup>

          </Box> 
                  <Flex>
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
                     <Text fontSize={17}>Stores & Services</Text>
                     <Text fontSize={17}>Choose You Store</Text>
                  </Box>
                  </Flex>
                <Flex>
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
                             justifyContent="left">
                         <Text as="b" fontSize={16}>Sign In</Text>
                         <Text fontSize={14}>for Free Shiping</Text>
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
                    <Box 
                        width="3rem"
                        height="2rem"
                        onMouseEnter={hover_Show4}
                        onMouseLeave={hover_Sho4} >
                        <Box  display={!isShow4?"none":"block"}>  <RiShoppingBasketFill /></Box>
                        <Box display={isShow4?"none":"block"}>  <RiShoppingBasketLine /></Box>
                    </Box>
                </Flex>
               
       </Flex>
                <Box width="25rem"
                     boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                     padding="1rem" 
                     position="relative"
                     right="-68%"
                     top="-8rem"
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
       </Box>
    }

export default Navbar