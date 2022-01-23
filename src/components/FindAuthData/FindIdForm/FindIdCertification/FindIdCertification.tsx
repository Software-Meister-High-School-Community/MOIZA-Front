import { useRecoilState } from "recoil";
import { FindIdCertificationNumber } from "../../../../store/FindAuthData/findCheckDataAtom";
import * as FIF from "../FindIdForm.style";
import * as FIC from "./FindIdCertification.style";

const FindIdCertification: React.FC = () => {
  const [checkNumber, setCheckNumber] = useRecoilState(
    FindIdCertificationNumber
  );

  return (
    <>
      <FIC.FindIdCertificationBox>
        <FIC.FindIdCertificationTitle>
          인증번호 입력
        </FIC.FindIdCertificationTitle>
        <FIC.FindIdCertificationInputWrap>
          <FIF.FindIdFormTextInput
            isWrite={checkNumber !== ""}
            onChange={(e) => setCheckNumber(e.target.value)}
            placeholder="인증번호를 입력해주세요."
          />
          <FIF.FindIdFormCertificationButton
            isWrite={checkNumber !== ""}
            disabled={checkNumber === ""}
          >
            인증메일 재발송
          </FIF.FindIdFormCertificationButton>
        </FIC.FindIdCertificationInputWrap>
      </FIC.FindIdCertificationBox>
    </>
  );
};

export default FindIdCertification;
