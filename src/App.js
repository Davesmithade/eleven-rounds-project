import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="" element={<SignUp/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App