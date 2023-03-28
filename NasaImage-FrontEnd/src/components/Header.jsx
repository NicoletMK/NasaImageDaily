import { Popover } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import getUser from '../hooks/queries/get-user'


export default function Navbar() {
  const user= getUser();
const queryClient = useQueryClient();

// queryClient.refetchQueries([GET_USER])
  return (
    <div >
      <header>
       
        <Popover>
          <Disclosure as="nav" className="bg-slate-800">
            {() => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between">
                  
                    <div className="flex flex-1 relative items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex flex-shrink-0 items-center  text-white">
                        <a href="/" className="absolute left-16 sm:left-56 -bottom-3  md:relative md:left-0 md:bottom-0">
                          <h3 className="font-semibold text-xl"> NasaApp</h3>
                        </a>
                      </div>
                
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {!user.data ? (
                        <>
                          <a
                            href="/register"
                            className="ml-4  whitespace-nowrap text-base font-normal hover:text-gray-300 text-white"
                          >
                            Register
                          </a>
                          <a
                            href="/login"
                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border px-5 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                          >
                            Login
                          </a>
                        </>
                      ) : 
                      (
                        <a
                        href="/logout"
                        className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gradient-to-r from-light-purple to-dark-purple bg-origin-border px-5 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                      >
                        Logout
                      </a>
                        
                      )}
                    </div>
                  </div>
                </div>

              </>
            )}
          </Disclosure>
        </Popover>
      </header>
    </div>
  );
}
