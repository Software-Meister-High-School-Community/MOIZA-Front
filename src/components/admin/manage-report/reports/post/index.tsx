import * as S from './styles'
import Type from '../../../../../assets/img/admin/post-type.svg'

const ReportOfPost:React.FC = () => {
    return(
        <S.Wrapper>
            <S.Summary>
                <S.Title>
                    <img src={Type}/>
                    <h1>장정원 싫어하는 사람들 모여봐</h1>
                </S.Title>
                <S.Info>
                    <S.Name>멩쓴쥬</S.Name>
                    <S.School>미림마이스터고</S.School>
                    <S.UserType>재학생</S.UserType>
                </S.Info>
            </S.Summary>
            <S.Details>
                <S.Top>
                    <p>2021 / 11 / 03</p>
                    <S.Button>본문 확인</S.Button>
                </S.Top>
                <S.Bottom>
                    <div>신고<p>7회</p></div>
                    <S.Button>게시물 삭제</S.Button>
                </S.Bottom>
            </S.Details>
        </S.Wrapper>
    )
}
export default  ReportOfPost