import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import AddDelivery from "./pages/AddDelivery";
import DeliveryDetails from "./pages/DeliveryDetails";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import cat from './assets/cat-in-dark.gif'
import { DarkModeContext, DarkModeContextProvider } from "./context/DarkMode";

function App() {


  return (

    <div className=" min-h-screen bg-gray-100 dark:bg-black">
      <DarkModeContextProvider>

        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="deliveries/:deliveryId" element={<DeliveryDetails />} />
            <Route path="deliveries/new" element={<AddDelivery />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        
      </DarkModeContextProvider>
    </div>
  );
}

export default App;
