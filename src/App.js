import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import AddDelivery from "./pages/AddDelivery";
import DeliveryDetails from "./pages/DeliveryDetails";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function App() {
  return (

    <div className=" min-h-screen bg-gray-100 dark:bg-black">

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="deliveries/:deliveryId" element={<DeliveryDetails />} />
          <Route path="deliveries/new" element={<AddDelivery />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
