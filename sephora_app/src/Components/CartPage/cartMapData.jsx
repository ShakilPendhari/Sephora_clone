import { Flex, Text, Select, Heading, Box ,Image, Divider, Center, Spacer, Button, Tooltip} from '@chakra-ui/react'
import UseStateChange from '../../hook/stateChange';



const CartMapData = (item) => {

    const [ value, handleValue] = UseStateChange();

    const Delete = (id)=>{
        item.changeLoading(true);
       fetch(`http://localhost:8080/selData/${id}`,{
        method:"delete"
       }).then((res)=>item.changeLoading(false))
       .catch((error)=>{console.log("e:",error);item.changeLoading(false)})
    }

  return (
    <Flex key={item.id} 
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
          value={value}
          onChange={(e) => handleValue(e.target.value)}
        >
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
              onClick={()=>{Delete(item.id); 
                            item.setCount(item.count+2)}}> 
           <Tooltip label='Remove form cart' placement='top'>
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
      <Text >${item.Price * value}</Text>
      <button>Change Method</button>
    </Flex>
  </Flex>
  )
}

export default CartMapData