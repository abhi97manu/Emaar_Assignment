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
        const response = await axios.get(`${server_url}${url}`,{withCredentials:true});
       if(response.status ===200)
        setData(response);
       
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    callAPi();
  }, []);

  return { data, loading, error };
};




export const useGetApiCallWithTenant = (url, ten_id) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {

    console.log("calling get api with tenat", ten_id)
    async function callAPi() {
      try {
        const response = await axios.get(`${server_url}${url}`,{withCredentials:true, headers: {
          'tenant-id': ten_id
        }});
      
        setData(response.data);

       console.log(data)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    callAPi();
  }, [ten_id ,url]);



  

  return { data, loading, error };
};



export const usePostApiCallWithTenant = (url, ten_id, sendData) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {

    
    async function callAPi() {
      try {
        const response = await axios.post(`${server_url}${url}`,sendData,{withCredentials:true,
           headers: {
          'tenant-id': ten_id
        }});
       
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    callAPi();
  }, []);



  

  return { data, loading, error };
};

