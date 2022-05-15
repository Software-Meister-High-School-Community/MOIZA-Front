import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { postSignup } from "../../api/signup";
import { ISignupProps } from "../../interface/Signup/Signup.type";
import {
  SignupFormData,
  SignupIdPwFormData,
} from "../../store/Signup/registerInfoAtom";
import { signupPart } from "../../store/Signup/signupPartAtom";
import schoolTransform from "../../util/schoolTransform";

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

  const submitAuthData = useCallback(async () => {
    if (userInfo.user_type === "USER") {
      navigate("/graduatecheck");
      return;
    }

    const { account_id, password, checkPw } = authData;
    const {
      name,
      school,
      user_type,
      birthday,
      sex,
      email,
      certificationNumber,
    } = userInfo;

    const signupData: ISignupProps = {
      account_id,
      password,
      checkPw,
      name,
      school: schoolTransform.schoolToAbbreviationName(school),
      user_type,
      birthday,
      sex,
      email,
      certificationNumber,
    };

    try {
      await postSignup(signupData);
      window.alert("회원가입 성공");
      setPart("약관동의");
      resetInfo();
      resetAuth();
      navigate("/signupsuccess");
    } catch (error) {
      window.alert("회원가입 실패");
    }
  }, [navigate, resetAuth, resetInfo, setPart, authData, userInfo]);

  return {
    isPwShow,
    setIsPwShow,
    isCheckPwShow,
    setIsCheckPwShow,
    handleIdPw,
    submitAuthData,
  };
};

export default useSignupIdPw;
