import {
  CertificationAlertBox,
  CertificationAlertImg,
  CertificationAlertText,
} from "./CertificationAlert.style";
import * as Imgs from "../../../assets/img/index";

const CertificationAlert: React.FC = () => {
  return (
    <CertificationAlertBox>
      <CertificationAlertImg src={Imgs.FindAuthDataSendIcon} />
      <CertificationAlertText>
        <strong>인증메일</strong>이 발송되었습니다.
      </CertificationAlertText>
    </CertificationAlertBox>
  );
};

export default CertificationAlert;
