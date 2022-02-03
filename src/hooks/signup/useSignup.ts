import { useRecoilState } from "recoil";

import { signupPart } from "../../store/Signup/signupPartAtom";

const useSignup = () => {
  const [Part, setPart] = useRecoilState(signupPart);

  //약관 동의 부분
  const goToInfo = () => {
    setPart("정보입력");
  };

  //아이디 / 비밀번호 부분

  return {
    goToInfo,
  };
};

export default useSignup;
