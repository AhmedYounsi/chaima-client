import axios from "axios";
import url from "../api";
 


export const GetAllConsult = async () => {
  try {
    const res = await axios.get(`${url}/consultations/get_all`);
    return res
  } catch (error) {  
     return error.response
  }
};
