import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Schedule from "./components/Schedule";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="h-screen bg-ctp-mantle">
      <Header />
      <Schedule />
    </div>
  </>
);
