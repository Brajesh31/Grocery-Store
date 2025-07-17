import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
