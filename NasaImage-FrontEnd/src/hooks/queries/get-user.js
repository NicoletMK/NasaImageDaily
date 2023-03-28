import Cookies from 'js-cookie';
import { useQuery } from '@tanstack/react-query';
import { GET_USER } from '../../constants/query-constant';
export default function getUser() {
  const token = localStorage.getItem('jwtToken');
  const user = true;

  return useQuery([GET_USER, token], async () => {
    try {
      if (!token) return null;
      return user;
    } catch (err) {
      console.log(err);
    }
  });
}