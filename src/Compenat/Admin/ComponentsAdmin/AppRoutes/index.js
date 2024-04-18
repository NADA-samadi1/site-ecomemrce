import { Route, Routes } from "react-router-dom";
import Customers from "../../Page/Customers";
import Dashboard from "../../Page/Dashbaord";
import Inventory from "../../Page/Inventory";
import Orders from "../../Page/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;
