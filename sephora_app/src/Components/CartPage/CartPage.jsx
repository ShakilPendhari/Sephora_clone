import {
  Heading,
  Flex,
  Image,
  Text,
  Button,
  Box,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";
import StateChange from "../../hook/stateChange";
import { cartData } from "./cart.api";
import CartMapData from "./cartMapData";
import CartSideBar from "./cartSideBar";
// import data from "../../../db.json"
// console.log(data)


const CartPage = () => {
  const { id } = useParams();
  const { loading, setLoading } = useContext(authContext);
  const [value, handleValue] = StateChange();
  const [state, setState] = useState([]);
  const [ count, setCount ] = useState(0)



  useEffect(() => {
    cartData()
      .then((res) => setState(res))
      .catch((e) => console.log(e));

  }, [value,loading]);

  if(loading){
    return <div>...Loading</div>
  }

  return (
    <Flex gap="2rem" 
          m="0rem 5rem" 
          direction="row"
          padding="1rem">
      <Flex direction="column" 
            marginBottom="100rem">
        <Heading as="h1" 
                 fontSize={23} 
                 textAlign="left"
                 m="2rem 0rem">
          My Basket
        </Heading>
        <Flex
          border="1.5px solid gray"
          padding="0.5rem 0.3rem"
          direction="column"
          textAlign="left"
          borderRadius="0.5rem"
        >
          <Heading as="h2" fontSize={18}>
            The Sephora Credit Card Program
          </Heading>
          <Flex gap="2rem" alignItems="center">
            <Image
              src="https://www.sephora.com/contentimages/creditcard/cardicon/CreditCard.svg"
              alt="card"
            />
            <Text fontSize={16}>
              Save $19.00 on this order when you open and use either Sephora
              Credit Card today*
            </Text>
            <Button
              style={{
                border: "3px solid black",
                padding: "1rem 2.5rem",
                borderRadius: "2rem",
                bg: "white",
              }}
            >
              SEE DETAILS
            </Button>
          </Flex>
          <Text>*Subject to credit approval. Exclusions apply.</Text>
        </Flex>
        <Flex direction="column" gap="2rem" mt="3rem" textAlign="left">
          <Heading as="h1" fontSize={21}>
            Get It Shipped (0)
          </Heading>
          <Flex display="column" gap="2rem">
            <Flex direction="row" gap="1rem" alignItems="center" m="1rem 0rem">
              <Image
                mb="-2rem"
                width="4rem"
                height="4rem"
                src="https://cdn0.iconfinder.com/data/icons/the-essential/30/delivery_van-512.png"
              />
              <Text as="b" maxW="32rem" mt="2rem" fontSize={18}>
                Beauty Insiders enjoy FREE standard shipping on all orders. Free
                Returns on all purchases.*
              </Text>
            </Flex>
            <Flex gap="1rem" justifyContent="space-between">
              <Box
                m="auto"
                border="1.5px solid gray"
                borderRadius="0.5rem"
                padding="1rem 3rem"
                style={{
                  padding: "1rem",
                }}
              >
                <Text>
                  Get <strong>2</strong> free sample(s) with every order
                </Text>
                <Text as="b">SELECT YOUR SAMPLE(S)﻿</Text>
              </Box>
              <Spacer />
              <Box
                m="auto"
                border="1.5px solid gray"
                borderRadius="0.5rem"
                padding="1rem 3rem"
                style={{
                  padding: "1rem",
                }}
              >
                <Text>
                  You now have <strong>0</strong> Beauty Insider points
                </Text>
                <Text as="b">REDEEM YOUR REWARDS﻿</Text>
              </Box>
            </Flex>
            <Divider />
            <Flex direction="column" gap="2rem" textAlign="center" mt="3rem">
              {/* <Text as="b">Your basket is currently empty.</Text>
                        <Button 
                           bg="black" color="white"
                           width="50%"
                           margin="auto"
                           borderRadius="2rem">Shop New Arrivals</Button> */}
              {state?.map((item,i) => {
                if(state.length-1<i)
                {
                 setCount(item.Price);
                }
                return  <CartMapData key={item.id} changeLoading={setLoading}  setCount={setCount} count={count} {...item}/>
              }
               
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="40%" 
            // border="1px solid gray" 
            h="80rem"
            borderRadius="0.3rem"
            mt="5.7rem">
          <CartSideBar/>
            </Flex>
    </Flex>
  );
};

export default CartPage;
