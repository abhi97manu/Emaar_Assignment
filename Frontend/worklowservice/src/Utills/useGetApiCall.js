import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

const server_url = import.meta.env.VITE_SERVER_URL;


export const useGetApiCall = (url) => {
  const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function callAPi() {
      try {
      
        const response = await axios.get(`${server_url}${url}`);
            setData(response)
      
        
      } catch (error) {
        setError(error)
      }
      finally {
        setLoading(false)
      }
    }

    callAPi()
  },[]);

 
  
  return {data, loading, error}
};
