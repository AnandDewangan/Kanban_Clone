import React from "react";
import "./App.css";
import Aside from "./Components/aside_bar/aside";
import Topbar from "./Components/top_bar/topBar";
import MobileApp from "./Components/mobile_app/mobileApp";

export default function App() {
  return (
    <div className="bigContainer">
      <div className="aside">
        <Aside />
      </div>

      <div className="topbar">
        <Topbar />
      </div>

      <div className="mainSection">
        <MobileApp />
      </div>
    </div>
  );
}
