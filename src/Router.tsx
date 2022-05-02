import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Admin from "./pages/admin";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import CategoryPage from "./pages/category/CategoryPage";
import FindAuthDataPage from "./pages/FindId/FindId.page";
import WriteNotice from "./components/admin/writeNotice";
import SearchPage from "./pages/search/SearchPage";
import MainPage from "./pages/mainpage/mainpage";
import NoticeList from "./pages/notice/NoticeListPage";
import ShowNotice from "./pages/notice/ShowNoticePage";
import SignupSuccess from "./components/Signup/SignupSuccess";
import GraduateCheckPage from "./pages/GraduateCheck/GraduateCheckPage";
import GraduateCheckSuccess from "./components/GraduateCheck/GraduateCheckSuccess";
import PostList from "./pages/post/PostListPage";
import MyPage from "./components/mypage/index";
import PostReplyPage from "./pages/PostReply/PostReplyPage";
import PostWrite from "./pages/post/PostWritePage";
import Follow from "./pages/follow";
import EditProfile from "./components/editProfile";
import TempList from "./components/post/temporary/TempList";
import ResultPage from "./pages/result/ResultPage";
import IntroducePage from "./pages/introduce";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/intro" element={<IntroducePage />} />
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
        <Route path="/result/:title" element={<ResultPage />} />
        <Route path="/list/:listname" element={<PostList />} />
        <Route path="/list/:listname/:postid" element={<PostReplyPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/postwrite/:writefield" element={<PostWrite />} />
        <Route path="/follow/:userid" element={<Follow />} />
        <Route path="/mypage/:userid" element={<MyPage />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/templist/:tempfield" element={<TempList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
