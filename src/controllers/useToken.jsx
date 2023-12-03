import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const useTokenRefresh = () => {
  const [username, setName] = useState('');
  const [data, setData] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const axiosJWT = axios.create();
  const navigate = useNavigate();

  const refreshToken = async () => {
    try {
      const response = await axios.get('https://0468-2001-448a-40a7-1aa5-1138-a03b-a329-a0ae.ngrok-free.app/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.username);
      setData(decoded);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate('/');
      }
    }
  };


  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
      const response = await axiosJWT.get('https://0468-2001-448a-40a7-1aa5-1138-a03b-a329-a0ae.ngrok-free.app/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      console.log(decoded);
      setExpire(decoded.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
 

  // useEffect(() => {
  //   refreshToken();
  // }, []);


  return { username,data, token, axiosJWT, expire, refreshToken };
};

export default useTokenRefresh;
