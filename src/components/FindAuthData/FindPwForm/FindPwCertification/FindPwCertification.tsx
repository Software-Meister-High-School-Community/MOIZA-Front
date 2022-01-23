import { useRecoilState } from "recoil";
import { findPwCertificationNumber } from "../../../../store/FindAuthData/findCheckDataAtom";
import * as FPF from "../FindPwForm.style";
import * as FPC from "./FindPwCertification.style";

const FindPwCertification: React.FC = () => {
  const [checkNumber, setCheckNumber] = useRecoilState(
    findPwCertificationNumber
  );

  return (
    <FPC.FindPwCertificationBox>
      <FPC.FindPwCertificationTitle>인증번호 입력</FPC.FindPwCertificationTitle>
      <FPC.FindPwCertificationInputWrap>
        <FPF.FindPwFormTextInput
          isWrite={checkNumber !== ""}
          placeholder="인증번호를 입력해주세요."
          onChange={(e) => setCheckNumber(e.target.value)}
          value={checkNumber}
        />
        <FPF.FindPwFormCertificationButton
          isWrite={checkNumber !== ""}
          disabled={checkNumber === ""}
        >
          인증메일 재발송
        </FPF.FindPwFormCertificationButton>
      </FPC.FindPwCertificationInputWrap>
    </FPC.FindPwCertificationBox>
  );
};

export default FindPwCertification;
