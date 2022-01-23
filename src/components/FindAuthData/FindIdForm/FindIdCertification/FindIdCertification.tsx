import { useRecoilState } from "recoil";
import { FindIdCertificationNumber } from "../../../../store/FindAuthData/findCheckDataAtom";
import {
  FindIdFormCertificationButton,
  FindIdFormTextInput,
} from "../FindIdForm.style";
import {
  FindIdCertificationBox,
  FindIdCertificationInputWrap,
  FindIdCertificationTitle,
} from "./FindIdCertification.style";

const FindIdCertification: React.FC = () => {
  const [checkNumber, setCheckNumber] = useRecoilState(
    FindIdCertificationNumber
  );

  return (
    <>
      <FindIdCertificationBox>
        <FindIdCertificationTitle>인증번호 입력</FindIdCertificationTitle>
        <FindIdCertificationInputWrap>
          <FindIdFormTextInput
            isWrite={checkNumber !== ""}
            onChange={(e) => setCheckNumber(e.target.value)}
            placeholder="인증번호를 입력해주세요."
          />
          <FindIdFormCertificationButton
            isWrite={checkNumber !== ""}
            disabled={checkNumber === ""}
          >
            인증메일 재발송
          </FindIdFormCertificationButton>
        </FindIdCertificationInputWrap>
      </FindIdCertificationBox>
    </>
  );
};

export default FindIdCertification;
