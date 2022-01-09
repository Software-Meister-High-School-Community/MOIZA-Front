import * as S from './styles'
import Arrow from '../../../../../assets/img/admin/arrow.svg'
import {useState} from "react";
const ReportOfUser:React.FC = () => {
    const [showDetail,setShowDetail] = useState(false)
    return (
        <S.Wrapper isOpen={showDetail}>
            <S.Summary>
                <S.UserInfo>
                    <S.Name>
                        장정원
                    </S.Name>
                    <S.Name>
                        미림마이스터고
                    </S.Name>
                    <S.Type>
                        재학생
                    </S.Type>
                </S.UserInfo>
                <S.History>
                    <S.Count>누적 <p>7</p>회</S.Count>
                    <S.Arrow isFold={showDetail} src={Arrow} onClick={()=>setShowDetail(!showDetail)}/>
                </S.History>
            </S.Summary>
            {
                showDetail ? <Detail/> : ""
            }
        </S.Wrapper>
    )
}

const Detail = () => {
    return (
        <S.DetailWrapper>
            <S.Line/>
            <S.Details>
                <S.ReportCount>
                    사용자 신고
                    <p>3</p>
                </S.ReportCount>
                <S.ReportCount>
                    게시물 신고
                    <p>3</p>
                </S.ReportCount>
                <S.ReportCount style={{marginRight:"35px"}}>
                    답변 신고
                    <p>3</p>
                </S.ReportCount>
                <S.HeigthLine/>
                <S.UserFreeze>
                    <p>정지</p>
                    <input/>
                    <p>일</p>
                    <button>확인</button>
                </S.UserFreeze>
                <S.HeigthLine/>
                <S.RemoveUser>사용자 탈퇴 시키기</S.RemoveUser>
            </S.Details>
        </S.DetailWrapper>
    )
}
export default  ReportOfUser