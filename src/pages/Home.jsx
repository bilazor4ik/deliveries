import { Link } from 'react-router-dom';
import AllDeliveries from '../components/AllDeliveries';
import AlreadyDelivered from '../components/AlreadyDelivered';



export default function Home() {

    
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Deliveries</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all deliveries for current week.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link to="deliveries/new">

                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >
                            Add delivery
                        </button>
                    </Link>
                </div>
            </div>

            {/* Display list of All Deliveries*/}
          <AllDeliveries/>

          
        </div>
    )
}
