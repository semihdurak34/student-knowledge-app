import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditStudent from "./pages/EditStudent";
import AddStudent from "./pages/AddStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student/:studentId" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
