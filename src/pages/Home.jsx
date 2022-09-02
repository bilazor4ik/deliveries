import { Link } from 'react-router-dom';
import AllDeliveries from '../components/AllDeliveries';
import cat from '../assets/cat-in-dark.gif'
import { BsCircleHalf } from 'react-icons/bs'
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkMode';



export default function Home() {
   const {darkMode, setDarkMode} = useContext(DarkModeContext)
    return (
        <>
        {darkMode? <img src={cat} className="w-64 h-auto absolute" /> : null  }
        <div className="px-4 sm:px-6 lg:px-8 w-1/2 mx-auto">
            <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-0"
                onClick={() => setDarkMode(!darkMode)}
            >
                <BsCircleHalf className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                {darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            </button>
            <div className="sm:flex sm:items-center mt-4">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-200">  Deliveries</h1>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                        A list of all deliveries 
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link to="deliveries/new">

                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
                        >
                            Add delivery
                        </button>
                    </Link>
                </div>
            </div>

            {/* Display list of All Deliveries*/}
            <AllDeliveries />


           
        </div>
    
        </>)
}
