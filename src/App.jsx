import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/HomePage";
import LoginPage from "./scenes/loginPage";
import PostFormPage from "./scenes/postFormPage";
import PostCardView from "./scenes/postPage";
import ProfilPage from "./scenes/profilPage";
import ProfilPosts from "./scenes/profilPage/posts";
import ProfilFriends from "./scenes/profilPage/FriendsInfo";
import HttpCatImage from "./scenes/errorPage/HttpCatImage";
import SavedPostsPages from "./scenes/savedPosts";
import About from "./scenes/profilPage/about";
import NotificationsPage from "./scenes/notificationsPage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<HttpCatImage statusCode={404} />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/post" element={<PostCardView />} />
      <Route path="/saved" element={<SavedPostsPages />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/posting" element={<PostFormPage />} />
      <Route path="/profile" element={<ProfilPage />} />
      <Route path="/profile/posts" element={<ProfilPosts />} />
      <Route path="/profile/friends" element={<ProfilFriends />} />
      <Route path="/profile/about" element={<About />} />
    </Routes>
  );
}

export default App;
