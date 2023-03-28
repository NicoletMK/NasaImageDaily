import React from 'react';
import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Oval
      height={40}
      width={50}
      color='#a170e2'
      wrapperStyle={{}}
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor='#a170e2'
      strokeWidth={7}
      strokeWidthSecondary={3}
    />
  );
}
