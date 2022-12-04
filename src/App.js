import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Product from "./components/Product";
import GetProduct from "./components/GetProduct";
import SideBar from "./components/SideBar";
import GetCart from "./components/GetCart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sideBar" element={<SideBar />} />
          <Route path="/product" element={<Product />} />
          <Route path="/getProduct" element={<GetProduct />} />
          <Route path="/showCartDetails" element={<GetCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
