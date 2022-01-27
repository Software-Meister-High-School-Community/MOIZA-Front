import { Dispatch, SetStateAction } from "react";
import * as FPF from "../FindPwForm.style";
import * as FPC from "./FindPwCertification.style";

interface IFindPwCertificationProps {
  certificationNumber: string;
  setCertificationNumber: Dispatch<SetStateAction<string>>;
}

const FindPwCertification: React.FC<IFindPwCertificationProps> = ({
  certificationNumber,
  setCertificationNumber,
}) => {
  return (
    <FPC.FindPwCertificationBox>
      <FPC.FindPwCertificationTitle>인증번호 입력</FPC.FindPwCertificationTitle>
      <FPC.FindPwCertificationInputWrap>
        <FPF.FindPwFormTextInput
          isWrite={certificationNumber !== ""}
          placeholder="인증번호를 입력해주세요."
          onChange={(e) => setCertificationNumber(e.target.value)}
          value={certificationNumber}
        />
        <FPF.FindPwFormCertificationButton
          isWrite={certificationNumber !== ""}
          disabled={certificationNumber === ""}
        >
          인증메일 재발송
        </FPF.FindPwFormCertificationButton>
      </FPC.FindPwCertificationInputWrap>
    </FPC.FindPwCertificationBox>
  );
};

export default FindPwCertification;
