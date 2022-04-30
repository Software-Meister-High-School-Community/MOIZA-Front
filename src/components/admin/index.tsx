import React, { useMemo } from 'react';
import styled from "styled-components";
import { useEffect, useState } from "react";
import ManageReport from "./manageReport";
import Notification from "./notice";
import { useQuery } from "../../util/hooks/useQuery";
import { AUTHORITY, ManagementType, MANAGE_REPORT, NOTIFICATION } from "./constant";
import CertifyGraduation from './certifyGraduation';

const AdminMain: React.FC = () => {
  const [type, setType] = useState<ManagementType>(MANAGE_REPORT);
  const pageType = useQuery().get('page-type')
  useEffect(() => {
    pageType === 'notification' ? setType(NOTIFICATION) : setType(MANAGE_REPORT)
  }, [pageType])
  const changeType = (id: ManagementType) => {
    setType(id)
  }
  const posts = useMemo(
    () => {
      if (type === "REPORT") return <ManageReport />
      else if (type === "NOTIFICATION") return <Notification />
      else return <CertifyGraduation />
    }, [type]
  )
  return (
    <Wrapper>
      <Title>어드민 페이지</Title>
      <TypeWrapper>
        <Types>
          <Type id={MANAGE_REPORT} onClick={() => changeType(MANAGE_REPORT)} isSelected={type === MANAGE_REPORT}>신고관리</Type>
          <Type id={NOTIFICATION} onClick={() => changeType(NOTIFICATION)} isSelected={type === NOTIFICATION}>공지사항</Type>
          <Type id={AUTHORITY} onClick={() => changeType(AUTHORITY)} isSelected={type === AUTHORITY}>졸업생 인증</Type>
        </Types>
      </TypeWrapper>
      {posts}
    </Wrapper>
  )
}
export default AdminMain;

interface StyleProps {
  isSelected: boolean
}

const Wrapper = styled.section`
    width : 1200px;
    margin : 0 auto;   
`
const Title = styled.h1`
  font-size: ${props => props.theme.fontSize.head_small};
  font-weight: 700;
  font-family: Roboto;
  font-style: normal;
  line-height: 37.5px;
  margin-top: 123px;
  margin-left: 2px;
`
const TypeWrapper = styled.section`
  width: 1200px;
  display: flex;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`
const Types = styled.div`
  display: flex;
  border-bottom: 1px solid #999999;
`
const Type = styled.div`
  cursor: pointer;
  width: 400px;
  height: 45px;
  background-color: ${(props: StyleProps) => props.isSelected ? '#999999' : '#FFFFFF'};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props: StyleProps) => props.isSelected ? "#ffffff" : "#000000"};
  display: flex;
  align-items: center;
  justify-content: center;
  :first-of-type {
    border-radius: 5px 0 0 0;
  }
  :last-child{
    border-radius: 0 5px 0 0;
  }
`