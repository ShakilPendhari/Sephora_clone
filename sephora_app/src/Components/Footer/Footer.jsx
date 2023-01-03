import React from 'react'
import { Box, Text, Flex, Divider, Heading, Input, Button, Image} from "@chakra-ui/react";
import Section2, {Section1, RegionAndLanguage, SocialMedia } from './Footer.section';
import { FootSection1,  FootSection2, Region, } from './Data';

const Footer = () => {
  return (
    <Box style={{ backgroundColor:"black",
                  color:"white",
                 }}  
                  padding={["1rem 5rem", "1rem 5rem", "1rem 2rem",]}>
      <Flex 
           direction={["column", "column", "row"]} justifyContent="space-between">
        {
          FootSection1?.map((item)=>(
           <Section1 key={item.alt+Math.random()*100} {...item} />
          ))
          }
      </Flex>
      <Divider style={{margin:"2rem 0rem"}}/>
      <Flex 
           textAlign="left"
           justifyContent="space-between"
           gap="1rem"
           direction={["column", "column", "row"]}>
        {
          FootSection2?.map((item)=>
          <Flex  direction="column"
                 key={item.title+Math.random()*100}
                 textAlign="left"
                 >
              <Heading 
                     as="h2" 
                     textAlign="left"
                     fontSize={17}>{item.title}</Heading>
              <Section2  data={item.details}/>
            </Flex>)
        }

        <Flex direction="column">
          <Heading 
                  as="h2"
                  fontSize={17}
                  mb="0.5rem">Region & Language</Heading>
          {
             Region?.map((item)=>(
              <RegionAndLanguage key={item.title} {...item}/>
             ))
          }
         
        </Flex>
        <Flex 
             direction="column"
             justifyContent="space-between"
             rowGap="50%">
            <Flex direction="column">
            <Text  fontFamily="georgia" 
                   fontSize={35}>We Belong to </Text>
              <Text 
                fontFamily="georgia" 
                fontSize={35}
                >Something Beautiful</Text>
            </Flex>
           <Flex 
                gap="1rem" 
                align="flex-end" justifyContent="space-between">

              <Flex 
                   direction="column" 
                   flex="1">
                  <Text 
                       as="b" 
                       mb="1rem">Sign up for Sephora Emails</Text>
                  <Input 
                        placeholder="Enter your email address"
                        backgroundColor="white"
                        color="blackAlpha.900"
                        border="2px solid red.900"
                  />
              </Flex>
              <Button 
                   variant="outline"
                   _hover={{color: "blackAlpha.900",backgroundColor: "white"}}
                   borderRadius="3rem"
                   border="3px solid white"
                   padding="1.2rem 1.4rem">Sign Up</Button>
           </Flex>
         </Flex>
         </Flex>
         <Divider style={{margin:"2rem 0rem"}}/>
         <Flex mb="6rem" justifyContent="space-between">
          <Flex direction="column"
         >
            <Text as="b">© 2022 Sephora USA, Inc. All rights reserved.</Text>
            <Text as="b">Privacy PolicyTerms of UseAccessibilitySitemapYour Privacy Choices</Text>
            <Text as="b">1-877-737-4672    TTY: 1-888-866-9845</Text>
          </Flex>
          <Flex 
               justifyContent="space-between"
               gap="1rem"
               flexWrap="wrap">
             {
              SocialMedia?.map((item)=>(
                <Image 
                     key={item.img} 
                     src={item.img} 
                     alt="sephora"
                     width="45px"
                     height="45px"
                     _hover={{cursor:"pointer"}}
                     />
              ))
             }
          </Flex>
         </Flex>
    </Box>
  )
}

export default Footer