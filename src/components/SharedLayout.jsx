import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkMode';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Outlet } from 'react-router-dom'
import { BsCircleHalf } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { NotificationContext } from '../context/NotificationContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const {darkMode, setDarkMode} = useContext(DarkModeContext)
  const {showNotification, setShowNotification} = useContext(NotificationContext)
  return (
    <>
      <Disclosure as="nav" className="bg-gray-200 dark:bg-gray-700">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                     'x mark '
                    ) : (
                      'open menu'
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-0"
                onClick={() => setDarkMode({status: !darkMode.status})}
            >
                <BsCircleHalf className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                {darkMode.status ? 'Switch to light mode' : 'Switch to dark mode'}
            </button>
            
                </div>
                
                
              </div>
              <div className=" flex">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-200">  Deliveries</h1>
                    
                </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                <Link to="deliveries/new">

<button
    type="button"
    className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
>
    Add delivery
</button>
</Link>
                </div>
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  <button
                    type="button"
                    className="rounded-full  p-1 text-gray-700 dark:text-gray-200 dark:hover:text-gray-100 hover:text-white focus:ring-0 "
                      onClick={()=>setShowNotification(!showNotification)}
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5 sm:px-6">
                
                
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    
      <Outlet/>
      
    </>
  )
}
