import axios from "axios";
import url from "../api";
 


export const GetAllPatients = async () => {
  try {
    const res = await axios.get(`${url}/patients/get_all`);
    return res
  } catch (error) {  
     return error.response
  }
};
