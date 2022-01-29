import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Admin from "./pages/admin";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import CategoryPage from "./pages/category/CategoryPage";
import FindAuthDataPage from "./pages/FindId/FindId.page";
import WriteNotice from "./components/admin/write-notice";
import SearchPage from "./pages/search/SearchPage";
import MainPage from "./pages/mainpage/mainpage";
import NoticeList from "./components/notice/noticelist/NoticeList";
import ShowNotice from "./components/notice/shownotice/ShowNotice";
import { NoticeForm } from "./components/header/notice/Notice.style";
import SignupSuccess from "./components/Signup/SignupSuccess";
import GraduateCheckPage from "./pages/GraduateCheck/GraduateCheckPage";
import GraduateCheckSuccess from "./components/GraduateCheck/GraduateCheckSuccess";
import PostList from "./components/post/postlist/PostList";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/notice" element={<NoticeList />} />
        <Route path="/shownotice" element={<ShowNotice />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/write-notice" element={<WriteNotice />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signupsuccess" element={<SignupSuccess />} />
        <Route path="/graduatecheck" element={<GraduateCheckPage />} />
        <Route
          path="/graduatechecksuccess"
          element={<GraduateCheckSuccess />}
        />
        <Route path="/findauthdata" element={<FindAuthDataPage />} />
        <Route path="/category" element={<CategoryPage />}></Route>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/list/:listname" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
