import React, { useEffect, useState } from 'react'
import { Heading, Center, Flex } from "@chakra-ui/react";
import { Divider } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import mobile from "./Css/Register_Mobile.module.css"
import tab from "./Css/Register_Tab.module.css"
import styles from "./Css/Resister_Pc.module.css"




const Register = () => {
  const [wid, setWid ] = useState(null);
  const [ style, setStyle ] = useState(styles);

  

  useEffect(()=>{
    console.log(wid)
  const updateSize = ()=>{
    if(wid>=280 && wid<=480){
      setStyle((v=0)=>v+mobile)
    }
    else if( wid >= 481 && wid <= 767 )
    {
      setStyle((v=0)=>v+tab)
    }
    else{
      setStyle((v=0)=>v+styles)
    }
    setWid(window.innerWidth)
  }

  window.addEventListener('resize', updateSize);

  return ()=> window.removeEventListener("resize", updateSize);

  }, [wid,style])
  

  

  return (
    <div className={style.globe}>
        <Flex justifyContent="space-around" alignItems="center">
           <Heading as="h1"></Heading>
           <Heading className={style.h2Tag} as="h2">Create an Account</Heading>
           <CloseIcon color="red" pl="40px"/>
        </Flex>
        <Center height='3px' color="red">
           <Divider color="red" border="2" orientation='horizontal' />
        </Center>
    </div>
  )
}

export default Register
