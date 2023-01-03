import axios from "axios"

export const cartData = async()=>{
    let response = await axios.get(`http://localhost:8080/selData`);

    return response.data
}

