import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Admin from "./pages/admin";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import CategoryPage from "./pages/category/CategoryPage";
import FindAuthDataPage from "./pages/FindId/FindId.page";

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
        <Route path="/findauthdata/*" element={<FindAuthDataPage/>}></Route>
        <Route path="/category" element={<CategoryPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
