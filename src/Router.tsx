import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Admin from "./pages/admin";
import FindAuthDataPage from "./pages/FindId/FindId.page";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/*" element={<SignupPage />}>
          <Route path="Info" element={<SignupPage />} />
          <Route path="idpw" element={<SignupPage />} />
        </Route>
        <Route path="/findauthdata/*" element={<FindAuthDataPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
