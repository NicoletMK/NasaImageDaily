import React from 'react';

export default function Input({
  id,
  name,
  type,
  autoComplete,
  placeholder,
  value,
  onChange,
  onBlur,
  isInvalid,
  errorMessage
}) {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
      />
      {isInvalid && (
        <div className='  text-red-700  my-1  '>
          <span className='block sm:inline'>{errorMessage}</span>
        </div>
      )}
    </>
  );
}
