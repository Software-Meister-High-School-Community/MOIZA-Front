import { useRecoilState } from "recoil";
import { findPwCertificationNumber } from "../../../../store/FindAuthData/findCheckDataAtom";
import {
  FindPwFormCertificationButton,
  FindPwFormTextInput,
} from "../FindPwForm.style";
import {
  FindPwCertificationBox,
  FindPwCertificationInputWrap,
  FindPwCertificationTitle,
} from "./FindPwCertification.style";

const FindPwCertification: React.FC = () => {
  const [checkNumber, setCheckNumber] = useRecoilState(
    findPwCertificationNumber
  );

  return (
    <FindPwCertificationBox>
      <FindPwCertificationTitle>인증번호 입력</FindPwCertificationTitle>
      <FindPwCertificationInputWrap>
        <FindPwFormTextInput
          isWrite={checkNumber !== ""}
          placeholder="인증번호를 입력해주세요."
          onChange={(e) => setCheckNumber(e.target.value)}
          value={checkNumber}
        />
        <FindPwFormCertificationButton
          isWrite={checkNumber !== ""}
          disabled={checkNumber === ""}
        >
          인증메일 재발송
        </FindPwFormCertificationButton>
      </FindPwCertificationInputWrap>
    </FindPwCertificationBox>
  );
};

export default FindPwCertification;
