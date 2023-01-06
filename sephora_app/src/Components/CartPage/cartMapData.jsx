import { Flex, Text, Select, Heading, Box ,Image, Divider, Center, Tooltip, } from '@chakra-ui/react'
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthContext';
import UseStateChange from '../../hook/stateChange';
// import { useToast } from '@chakra-ui/react'
import { HandleUpdate } from './cart.api';



const CartMapData = (item) => {
  const { setCount, count, setLoading, loading} = useContext(authContext);
  // const [ loading1, setLoading1 ] = useState(false);
  const [ updatedcount, setUpdatedCount ] = useState(Number(item.Price));
  const [v, setV ] = useState(1);


 
useEffect(()=>{
  // changeVal();
  setCount(count+updatedcount);
},[updatedcount,v]);

const changeVal = (id,val)=>{
  setLoading(true);
  HandleUpdate(id,val).then((res)=>{console.log(res); setLoading(false) }).catch((err)=>{setLoading(false);console.log("err:",err)})
}



    const Delete = (id, Price)=>{
        item.changeLoading(true);
       fetch(`http://localhost:8080/selData/${id}`,{
        method:"delete"
       }).then((res)=>{item.changeLoading(false); 
        // setCount(count-(Number(Price)*v1))
      })
       .catch((error)=>{console.log("e:",error);item.changeLoading(false)})
    }


    if(loading)
    {
      return <div>Loading...</div>
    }


  return <> <Flex key={item.id} 
          justifyContent="space-around" 
          border="1px solid grey"
          borderRadius="0.3rem"
          padding="1rem"
          direction={{base:"column", 
                      sm:"column", 
                      md:"row"}}
          gap={{base:"1rem",
                sm:"2rem",
                md:"3rem"}}
          alignItems="flex-end">
    <Flex backgroundColor="whiteAlpha.900" 
          flex="1.5" 
          justifyContent={{base:"left",
                       sm:"left", 
                       md:"center"}}
          alignItems="center">
       <Image width={{base:"6rem", 
                      sm:"8rem", 
                      md:"10rem"}} 
              src={item.img} alt={item.text}  />
    </Flex>
    <Flex direction="column" 
          flex="5" 
          gap="2rem" 
          flexShrink="3">
      <Box textAlign="left"
           padding="1rem">
        <Heading as="h2" fontSize="1.1rem">{item.text}</Heading>
        <Text>
          Lunar New Year Airbrush Flawless Setting Spray
        </Text>
        <Text>ITEM 1236547</Text>
        <Text>Size: 3.3 oz / 100ml</Text>
      </Box>
      <Flex gap="1rem" alignItems="center">
        <Select
          width="5rem" 
          value={item.count1}
          onChange={(e) =>{ setV(e.target.value);setUpdatedCount(e.target.value*item.Price); changeVal(item.id,e.target.value)}}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </Select>
       <Flex gap="1rem">
       <Text style={{ color: "blue" }}>Move to Loves</Text>
          <Center height='25px' backgroundColor="grey.400">
            <Divider
             borderColor="grey.200"
             orientation='vertical' />
          </Center>
        <Text style={{ color: "blue", 
                       cursor:"pointer" }} 
              onClick={()=>{Delete(item.id, item.Price); 
                            item.setCount(item.count+2)}}
                            > 
           <Tooltip label='Remove form cart' 
                    placement='top'
                    >
             Remove
           </Tooltip>
        </Text>
       </Flex>
      </Flex>
    </Flex>
    <Flex flex="1" 
          alignItems="flex-start" 
          direction="column" 
          justifyContent="left"
          gap={{base:"11rem", sm:"11rem", md:"7.5rem"}}
           >
      <Text >${updatedcount*item.count1}</Text>
      <button>Change Method</button>
    </Flex>
    
  </Flex>

  </>
    
  
              }

export default CartMapData