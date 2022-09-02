import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Outlet } from "react-router-dom";
import { BsCircleHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import { NotificationContext } from "../context/NotificationContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const { showNotification, setShowNotification } =
    useContext(NotificationContext);
  return (
    <>
      <div className="flex flex-col items-center  px-16  text-white bg-gray-200 dark:bg-gray-700 sm:flex-row sm:justify-between">
        <div className="py-2">
          <button
            type="button"
            className="inline-flex rounded-md border border-transparent bg-gray-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-0"
            onClick={() => setDarkMode({ status: !darkMode.status })}
          >
            <BsCircleHalf className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
            {darkMode.status ? "Switch to light mode" : "Switch to dark mode"}
          </button>
        </div>
        <div className="py-2">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
            {" "}
            Deliveries
          </h1>
        </div>

        <div className="flex flex-row align-middle space-x-4 py-2">
          <Link to="deliveries/new">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
            >
              Add delivery
            </button>
          </Link>
          <button
            type="button"
            className="rounded-full  p-1 text-gray-700 dark:text-gray-200 dark:hover:text-gray-100 hover:text-white focus:ring-0 "
            onClick={() => setShowNotification(!showNotification)}
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <Outlet />
    </>
  );
}
