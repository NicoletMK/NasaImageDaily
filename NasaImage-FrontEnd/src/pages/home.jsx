import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import getUser from '../hooks/queries/get-user';
import useGetImage from '../hooks/queries/get-image';

export default function Home() {
  const navigate = useNavigate();

  const user = getUser();

  const { data, isLoading } = useGetImage();

  return (
    <div className='my-9'>
      <h1 className='text-4xl text-center font-semibold'>
        {' '}
        NASA Daily Image/Vedio
      </h1>
      <div className='flex justify-center my-9'>
        {!isLoading ? (
          data?.media_type == 'video' ? (
            <iframe
              width='1000'
              height='600'
              src={data?.url}
              title='Nasa Vedio'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          ) : (
            <img src={data?.url} height={700} width={700}></img>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
