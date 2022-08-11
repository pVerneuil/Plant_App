import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/dashboard" element= {<Dashboard />} />
      {/* /* path='*' wildcard if the url doesn't match any declared urls */}
      <Route path="*" element= {<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
