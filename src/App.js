import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ContactUs from "./pages/contact-us/Contact-us";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import SignUp from "./pages/signup/Sign-up";
import Product from "./pages/product/Product";
import { store } from "./store";
import SearchProducts from "./pages/search-products/Search-products";
import PageNotFound from "./pages/page-not-found/Page-not-found";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact_us" element={<ContactUs />} />
            <Route path="/search/products/:productName" element={<SearchProducts />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
