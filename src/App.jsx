import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import HomePage from "./scenes/HomePage";
import LoginPage from "./scenes/loginPage";
import PostFormPage from "./scenes/postFormPage";
import ProfilPage from "./scenes/profilPage";
import ProfilPosts from "./scenes/profilPage/posts";
import ProfilFriends from "./scenes/profilPage/FriendsInfo";
import HttpCatImage from "./scenes/errorPage/HttpCatImage";
import SavedPostsPages from "./scenes/savedPosts";
import About from "./scenes/profilPage/about";
import NotificationsPage from "./scenes/notificationsPage";
import SignupPage from "./scenes/signupPage";
import { UserContext, UserContextProvider } from "./context/userContext";
import Navbar from "./scenes/navbar";

function App() {
  const { userInfo } = useContext(UserContext);

  const user = userInfo != null;
  const location = useLocation()
  console.log(location.pathname)
  return (
    <>
      {
        location.pathname != '/signup' && location.pathname != '/login' ? <Navbar user={user} />: <></>
      }
      <Routes>
        <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignupPage />}
        />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/home/:_id"
          element={user ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/post/:_id"
          element={user ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/saved" element={<SavedPostsPages />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/posting" element={<PostFormPage />} />
        <Route path="/profile" element={<ProfilPage />} />
        <Route path="/profile/posts" element={<ProfilPosts />} />
        <Route path="/profile/friends" element={<ProfilFriends />} />
        <Route path="/profile/about" element={<About />} />
        <Route path="/logout" element={<LoginPage />} />
        <Route path="*" element={<HttpCatImage statusCode={404} />} />
      </Routes>
    </>
  );
}

export default App;
