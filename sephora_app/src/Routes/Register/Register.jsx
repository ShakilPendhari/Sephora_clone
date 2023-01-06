import React, { useContext, useEffect, useState } from 'react';
import { Heading, Flex, Select, HStack, FormControl, InputGroup, InputRightElement, VStack, Button } from "@chakra-ui/react";
import { Box , Image, Text, Input, Checkbox, Tooltip} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import "./Register.css"
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom"
import "./Register.css"
import { authContext, intialValue } from '../../Context/AuthContext';


// const AddData =(data)=>{
//     return fetch(`http://localhost:4040/auth`
//     ,{
//       method:"POST",
//       body:JSON.stringify(data),
//       headers:{
//          'Content-Type': 'application/json',
//       }
//     }).then((res)=>res.json()).then((res)=>console.log(res)).catch((err)=>console.log(err));
// } 




const Register = () => {
const [ display, setDisplay] = useState(true);
const  navigate  = useNavigate();
const { localstorage,setlocalStorage, formstate, setFormState,count, setCount, authState, setAuthState } = useContext(authContext);

useEffect(()=>{
   // setlocalStorage(localStorage.setItem("key",JSON.stringify(formstate)))
   //  setlocalStorage(JSON.parse(localStorage.getItem("key")) || {})
},[localstorage,formstate])

const handleReg = ()=>{
    if(display)
    {
      setDisplay(false);
    }
    else{
      setDisplay(true);
    }
}

const handlesubmit = (e)=>{
     e.preventDefault();
     setAuthState(!authState)
     console.log(formstate);
     setlocalStorage(localStorage.setItem("key",JSON.stringify(formstate)))
     setCount(count+5)
   //  setFormState(intialValue);
    navigate("/");
    setDisplay(!display);
   
}

const handleChange = (e)=>{
   setCount(count+5)
   console.log(e.target.value)
   const { value, name, type, checked } = e.target;
   const val = type==='checkbox' ?checked : value;
   setFormState({...formstate, [name]:val});
   
}

if(!display)
{
  return <div style={{display:"none"}}></div>
}

  return (
    <div style={{padding:"1rem"}} className="reg">
    <Box className='box' >
    <Flex justifyContent="space-between" 
        borderBottom="0.1px solid rgba(173, 169, 169, 0.3)" alignItems="center" >

           <Flex flex={3} justifyContent="center">

           <Heading as="h2" fontSize={16} fontWeight={600} color="black" >Create an Account</Heading>

           </Flex>

           <Flex style={{boxSize:"borderBox"}}>

              <CloseIcon 
                    // mr="2rem" 
                    style={{boxSize:"borderBox"}} 
                    onClick={handleReg} color="black"
                    width={2.5}
                    height={2.5}
                    />

           </Flex>

        </Flex>


        <Box  
            boxSize='200px' 
            h="40px"  
            mt={12}>
          <Image 
                src='https://www.sephora.com/img/ufe/bi/logo-beauty-insider.svg' 
                alt='Beauty Insider' />
        </Box>

        <Box>
          <Text 
              textAlign="left" 
              fontSize={14}
              m="1rem 0rem 1rem 0rem">
             Join the Beauty Insider loyalty program. Earn points, get <strong>FREE standard shipping</strong>, redeem rewards, and more.
          </Text>
        </Box>
        <FormControl 
                   width="100%"
                   display="flex"
                   flexDirection="column"
                   gap="1rem"
                   onSubmit={handlesubmit}>
          <HStack>
             <Input 
                  value={formstate.f_name}
                  name="f_name"
                  placeholder="First Name"
                  onChange={handleChange}
                  />
             <Input 
                 value={formstate.l_name}
                  name="l_name"
                  placeholder="Last Name"
                  onChange={handleChange}
                  />
          </HStack>
             <Input 
                  value={formstate.email}
                  name="email"
                  placeholder='Email Address'
                  onChange={handleChange}
                  />
          <Box>
             <Input 
                  value={formstate.password}
                  name="password"
                  placeholder="Password (6 to 12 characters)"
                  onChange={handleChange}
                  />
          </Box>
          <Box>
              <InputGroup>
                  <Input 
                        value={formstate.phone_No}
                        name="phone_No"
                        placeholder='Phone Number (optional)'
                        onChange={handleChange}
                        type="number"
                        />
                  <InputRightElement children={<Tooltip 
                      backgroundColor="blackAlpha.900"
                      p="0.5rem 0.25rem 0.7rem 1rem"
                      borderRadius={11}
                      fontSize={12}
                      hasArrow  
                      label="Use your phone number for faster account lookup in store. Already gave us a phone number in store? Enter it here to merge your accounts." 
                      placement="top">
                   <Box>
                      <HiOutlineInformationCircle/>
                   </Box>
                 </Tooltip> }/>
              </InputGroup>
          </Box>
          <HStack>
            <Image src="https://www.sephora.com/img/ufe/icons/birthday.svg" width={5} height={12} alt="celebration"/>
            <Text as="b">Enter your birthdate to receive a free gift every year.</Text>
          </HStack>
          <HStack>
          <Select 
              value={formstate.month}
              name="month" 
              placeholder="Month" 
              onChange={handleChange}>

              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
          </Select> 
          <Select 
                  value={formstate.day}
                  name="day"
                  onChange={handleChange}>
                <option>day</option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
          </Select>
          </HStack>
          <Input 
               name="zip"
               value={formstate.zip}
               placeholder="ZIP Code (to hear about store events near you)"
               onChange={handleChange}
          />
          <Box>
             <HStack>
             <Checkbox 
                 name="flag"
                 defaultChecked={false}
                 onChange={handleChange}
                 value={formstate.flag}></Checkbox>
                <label>Keep me signed in</label>
                <Tooltip 
                      backgroundColor="blackAlpha.900"
                      p="0.5rem 0.25rem 0.7rem 1rem"
                      borderRadius={11}
                      fontSize={12}
                      hasArrow  
                      label="selecting this option means you won't have to sign in as often on this device. For your security, we recommend only doing this on your personal devices." 
                      placement="top">
                   <Box>
                      <HiOutlineInformationCircle/>
                   </Box>
                 </Tooltip> 
             </HStack>
          </Box>
          <Box display="flex">
                 <Button
                     onClick={handlesubmit}
                     color="white"
                     backgroundColor="black"
                     borderRadius={25}
                     width={220}
                     p={0}
                     height="3.3rem"
                     fontWeight={600}
                     _hover={{backgroundColor:"green"}}>Join Now</Button>
          </Box>
        </FormControl>
        <VStack 
              spacing={2} 
              borderTop="0.5px solid rgba(173, 169, 169, 0.3)"
              mt={5} pt={5}>
            <Box 
               style={{textAlign:"left"}}
               fontSize={12}>
            By clicking “Join Now” you acknowledge that you are a U.S. or Canada resident and (1) have read Sephora’s 
            <Link to="">
                 <Text 
                     color="blue" 
                     as='u'> Privacy Policy
                  </Text>
            </Link> and 
            <Link>
                  <Text 
                      color="blue" 
                      as='u'> Notice of Financial Incentive
                  </Text>
            </Link> , (2), agree to 
            <Link>
                  <Text 
                       color="blue" 
                       as='u'> Terms of Use , Beauty Insider Terms</Text>
            </Link>, and to automatically receive Beauty Insider offers and notifications via email.
            </Box>

            <Box 
                textAlign="left"
                fontSize={12}>
            Sephora uses Google ReCaptcha and by registering, users are subject to Google’s <Link to="">
                 <Text 
                     color="blue" 
                     as='u'> Privacy Policy
                  </Text>
            </Link>  & 
            <Link to="">
                 <Text 
                     color="blue" 
                     as='u'> terms.
                  </Text>
            </Link>
            </Box>
        </VStack>
    </Box>
       
    </div>
  )
}

export default Register