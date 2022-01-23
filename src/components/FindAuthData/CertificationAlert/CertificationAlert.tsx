import {
  CertificationAlertBox,
  CertificationAlertImg,
  CertificationAlertText,
  CertificationPwGuideText,
} from "./CertificationAlert.style";
import * as Imgs from "../../../assets/img/index";
import { sendCertificationNumberStatus } from "../../../store/FindAuthData/certificationStatus";
import { useRecoilState } from "recoil";

const CertificationAlert: React.FC = () => {
  const [isSendNumber, setIsSendNumber] = useRecoilState(
    sendCertificationNumberStatus
  );

  return (
    <CertificationAlertBox isPwSend={isSendNumber.findPwSendNumber}>
      <CertificationAlertImg src={Imgs.FindAuthDataSendIcon} />
      <CertificationAlertText>
        <strong>인증메일</strong>이 발송되었습니다.
      </CertificationAlertText>
      {isSendNumber.findPwSendNumber && (
        <CertificationPwGuideText>
          회원가입 시 입력하신 이메일 <br />
          <strong>d2116@e-mirim.hs.kr</strong> 로 인증번호가 전송되었습니다.
        </CertificationPwGuideText>
      )}
    </CertificationAlertBox>
  );
};

export default CertificationAlert;
