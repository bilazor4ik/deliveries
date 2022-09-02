/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useState } from 'react'
import { Transition } from '@headlessui/react'
import {BsInfoLg} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { NotificationContext } from '../context/NotificationContext'
export default function Notification() {
 
const {showNotification, setShowNotification} = useContext(NotificationContext)
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 pt-24 py-6 sm:items-start"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={showNotification}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white dark:bg-slate-600 dark:shadow-gray-700 dark:text-gray-100 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                  <BsInfoLg className="h-5 w-5"/>
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium ">2 Deliveries coming today</p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-100">
                      Please change status of delivery to notify managment that packages were recieved
                    </p>
                    <div className="mt-3 flex space-x-7">
                      <button
                        type="button"
                        className="rounded-md dark:bg-slate-600 bg-white text-sm font-medium dark:text-orange-200 text-orange-700 hover:text-orange-600 focus:ring-0 dark:hover:text-orange-400"
                      >
                        Mark all as Recieved
                      </button>
                      <button
                        type="button"
                        className="rounded-md bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-0   dark:bg-slate-600 dark:text-gray-200 dark:hover:text-orange-400"
                        onClick={() => {
                            setShowNotification(false)
                          }}
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md  text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShowNotification(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <AiOutlineClose className="h-5 w-5  "/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
