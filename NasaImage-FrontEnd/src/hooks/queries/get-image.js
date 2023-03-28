import { BASE_URL } from '../../constants/constants';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useQuery } from '@tanstack/react-query';
import { GET_IMAGE } from '../../constants/query-constant';

export default function useGetImage() {
  const token = localStorage.getItem('jwtToken');
  const navigate = useNavigate();
  return useQuery([GET_IMAGE, token], async () => {

    try {
      const res = await axios.get(`${BASE_URL}/api/nasa-image`, {
        headers: { Authorization: `token ${token}` },
        withCredentials: true
      });
      return res.data;
    } catch (err) {
      console.log('err in autherzation', err.response);
      navigate('/login');
      if (err.response.status === 500) {
        console.log('no token so logout');
        navigate('/login');
        return false;
      }
    }
  });
}