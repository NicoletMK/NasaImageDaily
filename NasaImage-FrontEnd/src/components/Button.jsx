import React from 'react';
import { classNames } from '../utils';

export default function Button({ title, className,onClick,disabled }) {
  return (
    <button
    disabled={disabled}
    onClick={onClick}
      type='submit'
      className={classNames(
        !className
          ? 'flex mt-6 sm:mt-0 tracking-wide justify-center rounded-md bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border py-2 sm:py-3 px-6 text-sm sm:text-lg font-normal text-white shadow-sm hover:from-purple-700 hover:to-indigo-700'
          :  className,'flex mt-6 sm:mt-0 tracking-wide justify-center rounded-md bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border py-2 sm:py-3 px-6 text-sm sm:text-lg font-normal text-white shadow-sm hover:from-purple-700 hover:to-indigo-700'
       
      )}
    >
      {title}
    </button>
  );
}
