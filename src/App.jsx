import { BrowserRouter, Link, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Product from "./pages/Product.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Deals from "./pages/Deals.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import FreeSearch from "./pages/FreeSearch.jsx";

const App = () => {
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<FreeSearch />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
