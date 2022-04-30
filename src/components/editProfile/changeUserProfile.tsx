import React from "react";
import styled from 'styled-components';
import defaultImg from "../../assets/img/common/userDefaultIcon.svg";

const ChangeUserProfile: React.FC = () => {
  return (
    <ProfileImg>
      <img className="profileImg" src={defaultImg} />
      <button className="changeProfileButton">프로필 사진 바꾸기</button>
    </ProfileImg>
  );
};
export default ChangeUserProfile;

const ProfileImg = styled.div`
  margin-left: 36px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > .profileImg {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-top: -44px;
    background-color: #ffffff;
  }
  .changeProfileButton {
    width: 158px;
    height: 40px;
    border: 1px solid #E0E0E0;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 10.5px 0;
    margin-top: 20px;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
`