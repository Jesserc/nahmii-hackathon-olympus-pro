import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
<<<<<<< HEAD
// import "./global.css";
import Main from "./routes/Main";
import Bond from "./routes/Bond";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/nav/Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="bond/:id" element={<Bond />} /> 
      </Routes>
    </BrowserRouter>
=======
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> cf37b9e6ef02d5c28b699fd869749f54ae5f660f
);
