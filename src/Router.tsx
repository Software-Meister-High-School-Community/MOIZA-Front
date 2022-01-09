import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Admin from "./pages/admin";
import LoginPage from "./pages/Login/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/*" element={<></>}>
          <Route path="Info" element={<></>} />
          <Route path="idpw" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
