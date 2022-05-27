import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import HomeTemplate from "./templates/HomeTemplate";

function App() {
  return (
    <BrowserRouter>
      <HomeTemplate path="/homea" component={HomePage} />
    </BrowserRouter>
  );
}

export default App;
