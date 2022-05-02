import React from 'react';
import styled from 'styled-components'

const ChangeUserType: React.FC = () => {
    return (
        <>
            <ChangeUserTypeButton>졸업생 인증/전환하기</ChangeUserTypeButton>
            <ButtonSummary>졸업생으로 전환하시면 졸업 인증이 완료된 후에 계속 서비스를 이용하실 수 있습니다. 양해 부탁드립니다.</ButtonSummary>
        </>
    )
}
export default ChangeUserType

const ChangeUserTypeButton = styled.button`
  width: 176px;
  height: 40px;
  box-sizing: border-box;
  padding: 10.5px 0;
  border: 1px solid #E0E0E0;
  border-radius: 5px;
  background-color: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-top: 50px;
`
const ButtonSummary = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #555555;
  margin-top: 10px;
`