import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { BASE_URL } from "../../constants/constants";

export  function useUserRegister() {
    return useMutation(async ({values}) => {
  
      
        const res = await axios.post(`${BASE_URL}/api/signup`, values
       
        , {
          withCredentials: true,
        });
    
        console.log("register Successfully", res);
        return res;
      }
    )
  
}
