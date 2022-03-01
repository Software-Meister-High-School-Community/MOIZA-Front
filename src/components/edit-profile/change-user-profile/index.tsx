import React from "react";
import * as S from "./styles";
import defaultImg from "../../../assets/img/common/userDefaultIcon.svg";

const ChangeUserProfile: React.FC = () => {
  return (
    <S.ProfileImg>
      <img className="profileImg" src={defaultImg} />
      <button className="changeProfileButton">프로필 사진 바꾸기</button>
    </S.ProfileImg>
  );
};
export default ChangeUserProfile;
