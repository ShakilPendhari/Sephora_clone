import { Box, Tooltip, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { RiShoppingBasketFill, RiShoppingBasketLine  } from "react-icons/ri"
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthContext';

const CartAdded = () => {
    const navigate = useNavigate();
    const [ isShow4, setIsShown4] = useState(false);
    const { cart  } = useContext(authContext);
    const hover_Show4 = ()=>{ setIsShown4(true) }
    const hover_Sho4 = ()=>{ setIsShown4(false) }


  return (
    <Tooltip
    colorScheme="blue.600"
    arrowShadowColor="green"
    variant={{bgColor:"red"}}
    hasArrow="true"
    label="Click to show cart items"
    placement='left-start' >
<Box
  _hover={{cursor: "pointer"}}
 onClick={()=>navigate("/cart")}
 width="3rem"
 height="2rem"
 onMouseEnter={hover_Show4}
 onMouseLeave={hover_Sho4} >
 <Box  display={!isShow4?"none":"block"}>  <RiShoppingBasketFill style={{position:"absolute"}} />
 <Text  fontSize="0.8rem" 
         position="relative"
         top="25px" 
         left="6px" 
         bgColor="red.500"
         borderRadius="2rem" 
         width="1.3rem" ><b>{cart}</b></Text></Box>
 <Box display={isShow4?"none":"block"}>  <RiShoppingBasketLine style={{position:"absolute"}} />
 <Text  fontSize="0.8rem" 
         position="relative"
         top="25px" 
         left="6px" 
         bgColor="red.400"
         borderRadius="2rem" 
         width="1.3rem" ><b>{cart}</b></Text></Box>
</Box>
</Tooltip>
  )
}

export default CartAdded