import { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  headSignupCheckCertification,
  postSignupCertification,
} from "../../api/signup";
import { SignupFormData } from "../../store/Signup/registerInfoAtom";
import { signupPart } from "../../store/Signup/signupPartAtom";
import schoolTransform from "../../util/schoolTransform";
import { signupFormDataNullcheck } from "../../util/signupDataNullCheck";

const useSignupInfo = () => {
  const setPart = useSetRecoilState(signupPart);
  const [sexSelect, setSexSelect] = useState("MALE");
  const [userType, setUserType] = useState("STUDENT");
  const [userInfo, setUserInfo] = useRecoilState(SignupFormData);
  const [sendCertificationNumber, setSendCertificationNumber] = useState(false);
  const [notCheckCertificationNumber, setNotCheckCertificationNumber] =
    useState(true);

  const isInfoNull = useMemo(
    () => signupFormDataNullcheck(userInfo),
    [userInfo]
  );

  const isInfoComplete = useMemo(() => {
    return isInfoNull || notCheckCertificationNumber;
  }, [isInfoNull, notCheckCertificationNumber]);

  const setFullEmail = useCallback((): void => {
    setUserInfo((prev) => ({
      ...prev,
      email: userInfo.email + schoolTransform.schoolToEmail(userInfo.school),
    }));
  }, [userInfo.school, setUserInfo, userInfo.email]);

  const handleInfo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;

      setUserInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [setUserInfo]
  );

  const onSendCertificationNumber = useCallback(async () => {
    try {
      await postSignupCertification({
        scope: "EMAIL",
        type: "SIGN_UP",
        value: userInfo.email,
      });
      window.alert("인증번호 전송 성공");
      setSendCertificationNumber(true);
    } catch (error) {
      window.alert("인증번호 전송 실패");
    }
  }, [userInfo.email]);

  const checkCertification = useCallback(async () => {
    try {
      await headSignupCheckCertification({
        email: userInfo.email,
        auth_code: userInfo.certificationNumber,
        type: "SIGN_UP",
      });
      setNotCheckCertificationNumber(false);
      window.alert("인증 성공");
    } catch (error) {
      window.alert("인증 실패");
    }
  }, [userInfo.certificationNumber, userInfo.email]);

  const goToSetPw = () => {
    if (userType !== "USER") {
      setFullEmail();
    }
    setPart("아이디 / 비밀번호");
    console.log(userInfo);
  };

  return {
    sexSelect,
    setSexSelect,
    userType,
    setUserType,
    sendCertificationNumber,
    setSendCertificationNumber,
    notCheckCertificationNumber,
    isInfoComplete,
    handleInfo,
    onSendCertificationNumber,
    checkCertification,
    goToSetPw,
  };
};

export default useSignupInfo;
