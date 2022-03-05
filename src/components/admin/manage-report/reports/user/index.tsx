import React from "react";
import * as S from "./styles";
import Arrow from "../../../../../assets/img/common/arrow.svg";
import { useState } from "react";
import { UserReportPropsType } from "../../../constants";
import UseReplaceKeyword from '../../../../Common/search/replaceKeyword/index'

interface PropsType {
  userReport: UserReportPropsType;
  searchKeyword: string;
}

const ReportOfUser: React.FC<PropsType> = ({ userReport, searchKeyword }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <S.Wrapper isOpen={showDetail}>
      <S.Summary>
        <S.UserInfo>
          <S.Name>
            <UseReplaceKeyword
              string={userReport.name}
              keyword={searchKeyword}
              fontColor="#0048FF"
            />
          </S.Name>
          <S.Name>{userReport.school}</S.Name>
          <S.Type>{userReport.userType}</S.Type>
        </S.UserInfo>
        <S.History>
          <S.Progress>
            정지 <p>{userReport.wjdwl}</p>일 / <p>{userReport.now}</p>일 경과
          </S.Progress>
          <S.Count>
            누적 <p>{userReport.histroy}</p>회
          </S.Count>
          <S.Arrow
            isFold={showDetail}
            src={Arrow}
            onClick={() => setShowDetail(!showDetail)}
          />
        </S.History>
      </S.Summary>
      {showDetail ? <Detail /> : ""}
    </S.Wrapper>
  );
};

const Detail = () => {
  return (
    <S.DetailWrapper>
      <S.Line />
      <S.Details>
        <S.ReportCount>
          사용자 신고
          <p>3</p>
        </S.ReportCount>
        <S.ReportCount>
          게시물 신고
          <p>3</p>
        </S.ReportCount>
        <S.ReportCount style={{ marginRight: "35px" }}>
          답변 신고
          <p>3</p>
        </S.ReportCount>
        <S.HeigthLine />
        <S.UserFreeze>
          <p>정지</p>
          <input type="number" />
          <p>일</p>
          <button>확인</button>
        </S.UserFreeze>
        <S.HeigthLine />
        <S.RemoveUser>사용자 탈퇴 시키기</S.RemoveUser>
      </S.Details>
    </S.DetailWrapper>
  );
};
export default ReportOfUser;
