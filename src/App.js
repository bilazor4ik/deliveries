import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import AddDelivery from "./pages/AddDelivery";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

import { DarkModeContext, DarkModeContextProvider } from "./context/DarkMode";
import Notification from "./components/Notification";
import { NotificationContextProvider } from "./context/NotificationContext";
import { useEffect } from "react";

function App() {


  return (

    <div className=" min-h-screen bg-gray-100 dark:bg-black">
      <DarkModeContextProvider>
        <NotificationContextProvider>

          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />

              <Route path="deliveries/new" element={<AddDelivery />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Notification />
        </NotificationContextProvider>
      </DarkModeContextProvider>
    </div>
  );
}

export default App;
