import HomePage from "./scenes/HomePage";
import loginPage from "./scenes/loginPage";
import profilPage from "./scenes/profilPage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<loginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile/:userId" element={<profilPage />} />
    </Routes>
  );
}

export default App;
