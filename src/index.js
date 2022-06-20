import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyle";
import Typography from "./styles/Typography";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <GlobalStyles />
    <Typography />
    <NavMenu />
    <App />
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
