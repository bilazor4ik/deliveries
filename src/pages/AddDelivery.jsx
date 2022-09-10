import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";

export default function AddDelivery() {
  const [delivery, setDelivery] = useState({
    vendor: "",
    eta: "",
    ticket: "",
    comments: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(delivery);
    try {
      await addDoc(collection(db, "deliveries"), {
        vendor: delivery.vendor,
        eta: delivery.eta,
        ticket: delivery.ticket,
        comments: delivery.comments,
        status: false,
      });
    } catch (err) {
      alert(err);
    }

    setDelivery({
      vendor: "",
      eta: "",
      ticket: "",
      comments: "",
    });
    navigate("/");
  };

  return (
    <div className=" min-h-full flex justify-center items-center h-full">
      <form
        onSubmit={handleSubmit}
        className="space-y-8 divide-y divide-gray-200 my-auto dark:bg-neutral-400 F dark:text-gray-900 p-8"
      >
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 className="text-lg leading-6 font-medium text-center">
                Delivery details
              </h3>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="vendor"
                className="block text-sm font-medium sm:mt-px sm:pt-2"
              >
                Vendor
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  id="vendor"
                  name="vendor"
                  value={delivery.vendor}
                  onChange={(e) =>
                    setDelivery({ ...delivery, vendor: e.target.value })
                  }
                  autoComplete="country-name"
                  className="max-w-lg block focus:ring-orange-500 focus:border-orange-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  required
                >
                  <option></option>
                  <option>FedEx</option>
                  <option>USPS</option>
                  <option>UPS</option>
                  <option>Amazon</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="eta"
                  className="block text-sm font-medium sm:mt-px sm:pt-2"
                >
                  ETA
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="date"
                    name="eta"
                    id="eta"
                    value={delivery.eta}
                    onChange={(e) =>
                      setDelivery({ ...delivery, eta: e.target.value })
                    }
                    className="max-w-lg block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="ticket"
                  className="block text-sm font-medium  sm:mt-px sm:pt-2"
                >
                  Ticket Number
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="ticket"
                    id="ticket"
                    value={delivery.ticket}
                    onChange={(e) =>
                      setDelivery({ ...delivery, ticket: e.target.value })
                    }
                    className="max-w-lg block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="comments"
                  className="block text-sm font-medium sm:mt-px sm:pt-2"
                >
                  Comments
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    id="comments"
                    name="comments"
                    rows={1}
                    className="max-w-lg shadow-sm block w-full focus:ring-orange-500 focus:border-orange-500 sm:text-sm border border-gray-300 rounded-md"
                    value={delivery.comments}
                    onChange={(e) =>
                      setDelivery({ ...delivery, comments: e.target.value })
                    }
                    required
                  />
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-50">
                    Please write what to expect in package
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-center">
            <Link to="/">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
