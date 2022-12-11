import { useContext } from 'react';
import { AuthContext } from '../contexts/authProvider';

export const useAuth = () => {
  return useContext(AuthContext);

}


