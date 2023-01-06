import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react"


const Section2 = (props)=>{
    const { data } = props;
    // console.log(data)
    return <Box>
        {
            data?.map((item)=>(
                
                <Text 
                     _hover={{textDecoration:"underline", cursor:"pointer"}}
                     fontSize={14}
                     m="0.7rem 0rem"
                     fontWeight="500"
                     key={item}>{item}</Text>
            ))
        }
    </Box>
}

export default Section2; 


export const Section1 = (props)=>{

  return (
    <Flex 
        key={props.alt}
        justifyContent={["left", "left", "space-between"]}
        gap={["1rem","1rem", "0.3rem"]}
        m={["0.6rem"]}>
        <Image 
            src ={props.img}
            ml={props.width?"-0.9rem":""}
            width={props.width?props.width:"20px"}
            height={props.height?props.height:"20px"}
            alt={props.alt}
            mt={props.width?"-8px":"4px"}/>
        {/* <Spacer/> */}
        <Box 
            textAlign="left"
            fontSize={14}>
        <Text as="b">{props.text}</Text>
        <Text _hover={{textDecoration:"underline", cursor:"pointer"}}>{props.text1}</Text>
        </Box>
    </Flex>
  )
}

export const RegionAndLanguage = (props)=>{
    // console.log(props)
    return (
            <Flex justifyContent="left"
                  gap="1rem" m="0.2rem 0rem">
                <Image 
                     src={props.img} 
                     alt={props.img}
                     width="20px"
                     height="25px"/>
                <Text 
                    as="b"
                    fontSize={14}>{props.title}</Text>
            </Flex>
    )
}

export const SocialMedia = [
{ img:"https://www.sephora.com/img/ufe/icons/instagram-ko.svg"}, 
{
    img:"https://www.sephora.com/img/ufe/icons/facebook-ko.svg"
},
{
    img:"https://www.sephora.com/img/ufe/icons/twitter-ko.svg"
},
{
    img:"https://www.sephora.com/img/ufe/icons/youtube-ko.svg"
},
{
    img:"https://www.sephora.com/img/ufe/icons/pinterest-ko.svg"
},
{
    img:"https://www.sephora.com/img/ufe/icons/snapchat-ko.svg"
},
{
    img:"https://www.sephora.com/img/ufe/icons/tiktok-ko.svg"
},
]

