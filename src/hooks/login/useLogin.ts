import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { postLogin } from "../../api/login";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token.constants";
import { ILoginProps } from "../../interface/Login/Login.type";
import token from "../../lib/token";

const useLogin = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState<ILoginProps>({
    account_id: "",
    password: "",
  });

  const handleLoginData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLoginData((prev) => ({ ...prev, [name]: value }));
    },
    [setLoginData]
  );

  const submitLoginData = useCallback(async () => {
    console.log(loginData);

    if (loginData.account_id === "" || loginData.password === "") {
      return;
    }
    try {
      const data = await postLogin(loginData);
      token.setToken(ACCESS_TOKEN_KEY, data.access_token);
      token.setToken(REFRESH_TOKEN_KEY, data.refresh_token);
      window.alert("로그인 성공");
      navigate("/");
    } catch (error) {
      window.alert("로그인 실패");
    }
  }, [navigate, loginData]);

  return {
    loginData,
    handleLoginData,
    submitLoginData,
  };
};

export default useLogin;
