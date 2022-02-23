import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import {
  SignupFormData,
  SignupIdPwFormData,
} from "../../store/Signup/registerInfoAtom";
import { signupPart } from "../../store/Signup/signupPartAtom";

const useSignupIdPw = () => {
  const setPart = useSetRecoilState(signupPart);
  const [authData, setAuthData] = useRecoilState(SignupIdPwFormData);
  const resetAuth = useResetRecoilState(SignupIdPwFormData);
  const userInfo = useRecoilValue(SignupFormData);
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
    if (userInfo.studentStatus === "졸업생") {
      navigate("/graduatecheck");
      return;
    }
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
