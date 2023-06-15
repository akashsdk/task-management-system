import Home from "./screen/Home";
import LogIn from "./screen/LogIn";
import WrongPage from "./screen/WrongPage";


import { Routes, Route, BrowserRouter } from "react-router-dom";


import React from 'react';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<WrongPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
