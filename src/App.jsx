import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./scenes/HomePage";
import LoginPage from "./scenes/loginPage";
import PostFormPage from "./scenes/postFormPage";
import PostCardView from "./scenes/postPage";
import ProfilPage from "./scenes/profilPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/post" element={<PostCardView />} />
      <Route path="/posting" element={<PostFormPage />} />
      <Route path="/profile" element={<ProfilPage />} />
    </Routes>
  );
}

export default App;
