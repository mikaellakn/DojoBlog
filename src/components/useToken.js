import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setUserName } from '../features/counter/userSlice';


export default function useToken(){
  const dispatch = useDispatch();

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if(userToken !== null) dispatch(setUserName(userToken.username));
    return userToken?.id;
  };

  const [token, setToken] = useState(getToken());
  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.id);
  }

  return{
    setToken: saveToken,
    token
  }
}