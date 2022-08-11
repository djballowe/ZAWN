import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Navigation/Header";
import Footer from "./components/Navigation/Footer";
import ScrollToTop from "./components/Navigation/ScrollToTop";
import Home from "./components/Main Pages/Home";
import About from "./components/Main Pages/About";
import ProductMain from "./components/Main Pages/ProductMain";
import ProductPage from "./components/Main Pages/ProductPage";
import Contact from "./components/Main Pages/Contact";
import Blog from "./components/Main Pages/Blog";
import Return from "./components/Main Pages/Return";
import Shipping from "./components/Main Pages/Shipping";
import Checkout from "./components/Checkout/Checkout";
import OrderForm from "./components/Checkout/OrderForm";
import { Register } from "./components/Login/LogIn";
import LogIn from "./components/Login/LogIn";
import Error from "./components/Navigation/Error";

function App() {
  const { nav, cartClick } = Header();

  return (
    <div className="App">
      {nav}
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductPage />} />
          <Route
            path="/product/:id"
            element={<ProductMain handle={cartClick} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/return" element={<Return />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<OrderForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
