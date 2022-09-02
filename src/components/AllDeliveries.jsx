import React from 'react'
import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { db } from '../firebase';
import { replaceVendorWithLogo } from '../utils/replaceVendorWithLogo';
import { checkIfDeliveryDateToday } from '../utils/checkIfDeliveryDateToday';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const AllDeliveries = () => {
    const [allDeliveries, setAllDeliveries] = useState([])
    const [beingDeleted, setBeingDeleted] = useState(false)

    const getDeliveries = async () => {
        const q = query(collection(db, 'deliveries'), orderBy("eta", "asc"))
        onSnapshot(q, (querySnapshot) => {
            setAllDeliveries(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }

    useEffect(() => {
        getDeliveries()
       console.log( checkIfDeliveryDateToday('2022-08-26'))
    }, [])

    const updateStatus = async (id) => {
        const deliveryRef = doc(db, 'deliveries', id)
        const deliveryData = await getDoc(deliveryRef)
        const deliveryStatus = deliveryData.data().status
        console.log(deliveryStatus)
        try {
            await updateDoc(deliveryRef, {

                status: !deliveryStatus
            })

        } catch (err) {
            alert(err)
        }
    }

    const handleDelete = async (id) => {
        const deliveryRef = doc(db, 'deliveries', id)
        
        setBeingDeleted(true)
        setTimeout(()=>{
            setBeingDeleted(false)
        },
        1500)
      {/*   try {
            await deleteDoc(deliveryRef)
        } catch (err) {
            alert(err)
        }
        */}
    }

    return (
        <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50 text-center">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-6">
                                        Vendor
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">
                                        ETA
                                    </th>
                                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                                        Ticket #
                                    </th>
                                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                                        Comments
                                    </th>
                                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                                        Status
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">

                                        <span className="sr-only">delete</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300 bg-white text-center">
                                {allDeliveries.map((delivery) => {

                                    const { vendor, eta, ticket, comments, status } = delivery.data;
                                    return (

                                        <tr key={delivery.id} className={beingDeleted ? 'bg-red-300' : null}>
                                            <td className="whitespace-nowrap pl-4 py-2 text-gray-500">

                                                {replaceVendorWithLogo(vendor)}

                                            </td>
                                            <td className="whitespace-nowrap pl-4 py-2 text-gray-500">
                                                <div className="text-gray-900">
                                                    {eta}
                                                    </div>

                                            </td>
                                            <td className="whitespace-nowrap pl-4 py-2 text-gray-500">

                                                {ticket}

                                            </td>
                                            <td className="whitespace-nowrap pl-4 py-2 text-gray-500">

                                                {comments}

                                            </td>
                                            <td className="whitespace-nowrap pl-4 py-2 text-gray-500">
                                                <Switch

                                                    checked={status}
                                                    onChange={() => updateStatus(delivery.id)}
                                                    className={classNames(
                                                        status ? 'bg-indigo-600' : 'bg-gray-200',
                                                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                    )}
                                                >

                                                    <span
                                                        className={classNames(
                                                            status ? 'translate-x-5' : 'translate-x-0',
                                                            'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                        )}
                                                    >
                                                        <span
                                                            className={classNames(
                                                                status ? ' opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
                                                                'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                                                            )}
                                                            aria-hidden="true"
                                                        >
                                                            <svg className="h-3 w-3 text-gray-400 " fill="none" viewBox="0 0 12 12">
                                                                <path
                                                                    d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                                                    stroke="currentColor"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span
                                                            className={classNames(
                                                                status ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
                                                                'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                                                            )}
                                                            aria-hidden="true"
                                                        >
                                                            <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
                                                                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </Switch>
                                            </td>
                                            <td className="relative  py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <button onClick={() => handleDelete(delivery.id)}>

                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                                    </svg>
                                                </button>



                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllDeliveries