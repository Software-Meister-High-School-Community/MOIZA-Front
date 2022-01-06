import * as S from './styles'
const ReportsofComment = () => {
    return (
        <S.Wrapper>
            <div style={{display:"flex"}}>
                <S.UserInfo>
                    <img/>
                    <S.Name>멩쓴주</S.Name>
                    <S.School>미림마이스터고</S.School>
                    <S.UserType>재학생</S.UserType>
                </S.UserInfo>
                <S.ReportInfo>
                    <S.ReportCount>신고 <p>7</p>회</S.ReportCount>
                    <S.Day>2021 / 11 / 03</S.Day>
                </S.ReportInfo>
            </div>
            <S.ReportMainContent>
                <S.ReportContent>
                    정원니 바보새기 이것도 몰라? 우리 할머니가 더 잘 아시겠다......<br/>
                    ㅇ<br/>
                    3줄 끝..
                </S.ReportContent>
                <S.Buttons>
                    <button>본문 확인</button>
                    <button style={{marginTop:"14px"}}>답변 삭제</button>
                </S.Buttons>
            </S.ReportMainContent>
        </S.Wrapper>
    )
}
export default  ReportsofComment