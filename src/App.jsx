import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect } from "react";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Product from "./pages/Product.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Deals from "./pages/Deals.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Cart from "./pages/Cart.jsx";
import FreeSearch from "./pages/FreeSearch.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";
import Profile from "./pages/Profile.jsx";
import Orders from "./pages/Orders.jsx";

import { ping } from "./data/ping.js";

const App = () => {
  useEffect(() => {
    ping()
      .then(() => //console.log("DB is reachable"))
      .catch((error) => console.error("DB is not reachable:", error));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/category/:productCategory" element={<Category />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<FreeSearch />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/order-confirmation/:orderId"
            element={<OrderConfirmation />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          {/* 404 Not Found Route */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
