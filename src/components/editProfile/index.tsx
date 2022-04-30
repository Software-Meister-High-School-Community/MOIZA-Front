import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import SubmitButton from '../Common/Button/SubmitButton'
import ChangeUserProfile from './changeUserProfile'
import BackgroundColor from './backgroundColor'
import Introduction from './introduction'
import LinkList from './link'
import ChangeUserType from './changeUserType';
import { useRecoilValue } from 'recoil';
import { profileElementState } from '../../store/editProfile/profileElement';
import { BackGroundColorType } from './constant';

const EditProfile: React.FC = () => {
  const profileContent = useRecoilValue(profileElementState);
  const userInfo = useMemo(
    () => (
      <PersonInfo>
        <p className="name">장정원</p>
        <p className="school">미림마이스터고 재학생</p>
      </PersonInfo>
    ), []
  )
  console.log(profileContent)
  return (
    <Wrapper color={profileContent.profile_background_color}>
      <div className="colorBox" />
      <ProfileSection>
        <ChangeUserProfile />
        <EditSection>
          {userInfo}
          <BackgroundColor />
          <Introduction />
          <LinkList />
          <ChangeUserType />
          <section className="saveButtonSection">
            <SubmitButton big={false} text="저장" handleClick={() => console.log("sd")} blue={true} yellow={false} disable={true} />
          </section>
        </EditSection>
      </ProfileSection>
    </Wrapper>
  );
}
export default EditProfile

const Wrapper = styled.section<{
  color: BackGroundColorType
}>`
  width: 1200px;
  margin: 0 auto;
  >.colorBox {
    width: 100%;
    height: 348px;
    background-color: ${(props) => props.color};
  }
`
const ProfileSection = styled.section`
  display: flex;
`
const EditSection = styled.section`
  padding: 30px 0 0 42px;
  width: 717px;
  margin-bottom: 226px;
  > .backgroundColor {
    margin-top: 67px;
  }
  > .introduce {
    margin-top: 44px;
  }
  > .link {
    margin-top: 50px;
  }
  > .saveButtonSection {
    margin-top: 76px;
    display: flex;
    justify-content: flex-end;
  }
  > .editTitle {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
`
const PersonInfo = styled.strong`
  display: flex;
  align-items: center;
  color: #000000;
  font-style: normal;
  font-weight: normal;
  > .name {
    font-size: 32px;
    line-height: 37px;
  }
  .school {
    font-size: 18px;
    line-height: 21px;
    margin-left: 16px;
  }
`

