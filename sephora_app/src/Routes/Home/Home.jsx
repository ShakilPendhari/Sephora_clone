import React, { useContext, useEffect,  } from 'react'
import { Box, Flex, Image, Text, Grid, Divider, Center, useToast } from "@chakra-ui/react"
import { Data } from "./Data"
import SideBar from '../../Components/SideBar/SideBar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authContext } from '../../Context/AuthContext';

const handleAPI = (data)=>{
  let val = {...data,count1:1};
  axios.post(`http://localhost:8080/selData`,val).then((res)=>console.log("Data has been added")).catch((err)=>console.log(err))
}

const Home = () => {
  const { setCountcart, countcart, authState, setAuthState, localStorage } = useContext(authContext);
    // const navigate = useNavigate();
    const toast = useToast()
    const toastIdRef = React.useRef();

    useEffect(()=>{
        if(localStorage)
        {
           setAuthState(true);
        }
    },[])

    function addToast() {
      
      toastIdRef.current = toast ({
        title: "Item added successfully",
        status: 'success', 
    })
  };

  return (
    <Flex width="95%" 
          m="auto">
    <Box width="40%">
        <SideBar />
    </Box>
    <Center height='3900px' ml="0.5rem"  mr="1rem">
       <Divider orientation='vertical' />
    </Center>
    
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
        gap={4}>
      {
        Data?.map((item)=>(
          <Flex 
              
               onClick={()=>{ 
                addToast();
                setCountcart(countcart+1)
                // navigate(`/cart/${item.id}`); 
               
               handleAPI(item)}}
               direction="column"
               borderRadius="2rem"
               p="1rem"
               key={item.id}>
            <Image height="50%" width="100%" src={item.img} alt={item.id} />
            <Box >
              <Text as="b" p="0.4rem 0rem">{item.title}</Text>
              <Text fontWeight="500" p="0.4rem 0rem">{item.company}</Text>
              <Text  p="0.4rem 0rem">{item.text}</Text>
              <Text as="b" p="0.4rem 0rem">${" "}{item.Price}</Text>
            </Box>
          </Flex>
        ))
      }
    </Grid>
    </Flex>
  )
}

export default Home