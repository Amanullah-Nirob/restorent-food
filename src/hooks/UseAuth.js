import { useContext } from 'react';
import { AuthContext } from '../context/Context';

const UseAuth = () => {
   return useContext(AuthContext)
};

export default UseAuth;