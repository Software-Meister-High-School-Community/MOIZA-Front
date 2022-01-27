import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  SignupFormData,
  SignupIdPwFormData,
} from "../../store/Signup/registerInfoAtom";
import { signupPart } from "../../store/Signup/signupPartAtom";

const useSignupIdPw = () => {
  const [part, setPart] = useRecoilState(signupPart);
  const [authData, setAuthData] = useRecoilState(SignupIdPwFormData);
  const resetAuth = useResetRecoilState(SignupIdPwFormData);
  const [userInfo, setUserInfo] = useRecoilState(SignupFormData);
  const resetInfo = useResetRecoilState(SignupFormData);
  const [isPwShow, setIsPwShow] = useState(false);
  const [isCheckPwShow, setIsCheckPwShow] = useState(false);

  const navigate = useNavigate();

  const handleIdPw = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setAuthData((prev) => ({ ...prev, [name]: value }));
    },
    [setAuthData]
  );

  const goToLogin = () => {
    console.log(userInfo);
    console.log(authData);
    setPart("약관동의");
    resetInfo();
    resetAuth();
    navigate("/signupsuccess");
  };

  return {
    isPwShow,
    setIsPwShow,
    isCheckPwShow,
    setIsCheckPwShow,
    handleIdPw,
    goToLogin,
  };
};

export default useSignupIdPw;
