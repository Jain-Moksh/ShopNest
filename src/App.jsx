import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import Cart from "./Cart";
import Contact from './Contact';
import Product from './Products';
import SingleProduct from "./SingleProduct";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

const App = () => {
  const theme = {
    colors: {  
      bg: "#000",
      text: "rgba(29,29,29,8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      footer_bg: "#F6F8FA",
      btn: "rgb(98,84,243)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(132,144,255) 0%, rgb(98,129,252) 100%)",
      shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },

    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
