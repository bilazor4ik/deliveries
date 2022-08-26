import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import AddDelivery from "./pages/AddDelivery";
import DeliveryDetails from "./pages/DeliveryDetails";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function App() {
  return (


    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="deliveries/:deliveryId" element={<DeliveryDetails />} />
        <Route path="deliveries/new" element={<AddDelivery/>}/>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>

  );
}

export default App;
