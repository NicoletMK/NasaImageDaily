import React from 'react';

export default function IconButton({ label, icon , onClick }) {
  return (
    <div>
      <a
      onClick={onClick}
role='btn'
        className='inline-flex w-full justify-center rounded-md  bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border py-2 sm:py-3 px-2 text-xs sm:text-sm font-normal text-white shadow-sm hover:from-purple-700 hover:to-indigo-700 '
      >
        <img  alt={icon} className='w-4 sm:w-5' src={icon} />
        <span className='ml-1'>{label}</span>
        
      </a>
    </div>
  );
}