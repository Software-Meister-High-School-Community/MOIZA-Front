import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Admin from "./pages/admin";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import Category from "./components/category/Category";
import CategoryPage from "./pages/category/CategoryPage";

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

        <Route path="/category" element={<CategoryPage></CategoryPage>}/>
        <Route path="/findauthdata" />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
