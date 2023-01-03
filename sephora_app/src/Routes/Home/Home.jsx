import React from 'react'
import { Box, Flex, Image, Text, Grid, Divider, Center } from "@chakra-ui/react"
import { Data } from "./Data"
import SideBar from '../../Components/SideBar/SideBar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const handleAPI = (data)=>{
  axios.post(`http://localhost:8080/selData`,data).then((res)=>console.log("Data has been added")).catch((err)=>console.log(err))
}

const Home = () => {
    const navigate = useNavigate();
  return (
    <Flex width="95%" m="auto">
    <Box width="40%"><SideBar /></Box>
    <Center height='3900px' mr="1rem">
       <Divider orientation='vertical' />
    </Center>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
        gap={4}>
      {
        Data?.map((item)=>(
          <Flex 
               onClick={()=>{navigate(`/cart/${item.id}`); handleAPI(item)}}
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