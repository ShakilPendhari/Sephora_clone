import { Heading, Flex, Select, HStack, FormControl } from "@chakra-ui/react";
import { Box , Image, Text, Input} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import { MdArrowDropDown } from "react-icons/md"
import "./Register.css"
import { HiOutlineInformationCircle } from "react-icons/hi";


const Register = () => {

  const handleSubmit = ()=>{
    console.log("hello")
  }

  return (
    <div style={{backgroundColor:"white"}}>
        <Flex justifyContent="space-between" p="1rem" 
        borderBottom="0.1px solid rgba(173, 169, 169, 0.3)" alignItems="center">

           <Flex flex={3} justifyContent="center">

           <Heading as="h2" fontSize={16} fontWeight={600} color="black" >Create an Account</Heading>

           </Flex>

           <Flex style={{boxSize:"borderBox"}}>

           <CloseIcon mr="2rem" style={{boxSize:"borderBox"}} onClick={()=>console.log("Hii")} color="black"/>

           </Flex>

        </Flex>


        <Box  boxSize='200px'  mt={12}>
           <Image src='https://www.sephora.com/img/ufe/bi/logo-beauty-insider.svg' alt='Beauty Insider' />
        </Box>

        <Box>
          <Text fontSize={14}>
          Join the Beauty Insider loyalty program. Earn points, get <strong>FREE standard shipping</strong>, redeem rewards, and more.
          </Text>
        </Box>
        <FormControl width="100%">
          <HStack>
             <Input 
                  name="f_name"
                  backgroundColor="white" 
                  border="1.5px solid rgba(173, 169, 169)" placeholder="enter the text"/>
              <Input 
                  name="f_name"
                  backgroundColor="white" 
                  border="1.5px solid rgba(173, 169, 169)" placeholder="enter the text"/>
          </HStack>
          <Input 
                  name="f_name"
                  backgroundColor="white" 
                  border="1.5px solid rgba(173, 169, 169)" placeholder="enter the text"/>
          <Input backgroundColor="white" border="1.5px solid rgba(173, 169, 169)" placeholder="enter the text"/>
          <Box>
          <Input 
                  name="f_name"
                  backgroundColor="white" 
                  border="1.5px solid rgba(173, 169, 169)" placeholder="enter the text"/>
          </Box>
          <Box>
            <Image src="" alt="celebration"/>
            <Text>Enter your birthdate to receive a free gift every year.</Text>
          </Box>
          <HStack>
          <Select name="month" >
              <option >Month</option>
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
          <Select name="day">
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
          <Input placeholder="ZIP Code (to hear about store events near you)"/>
          <Box>
             <Input type="checkbox"/>
             <label>Keep me signed in</label>
             <HiOutlineInformationCircle/>
          </Box>
        </FormControl>
      
    </div>
  )
}

export default Register
