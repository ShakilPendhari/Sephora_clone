import axios from "axios"
import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";

export const cartData = async()=>{
    let response = await axios.get(`http://localhost:8080/selData`);

    return response.data
}

export const HandleUpdate = (id,data)=>{
    console.log(id,data);
      return  fetch(`http://localhost:8080/selData/${id}`,{
      method:"PATCH",
      body:JSON.stringify({count1:data}),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res)=>res.json())
  }