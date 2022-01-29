import * as S from './styles'
import Type from '../../../../../assets/img/admin/post-type.svg'
import{PostReportPropsType} from '../../../constants';
import UseReplaceKeyword from '../../../../../util/hooks/useReplaceKeyword/index'

interface PropsType {
    PostReport : PostReportPropsType
    searchKeyword : string
}

const ReportOfPost:React.FC<PropsType> = ({PostReport,searchKeyword}) => {
    return(
        <S.Wrapper>
            <section className="summary">
                <S.Title>
                    <img src={Type}/>
                    <h1><UseReplaceKeyword keyword={searchKeyword} string={PostReport.title} fontColor="#0048FF" /></h1>
                </S.Title>
                <S.Info>
                    <S.Name><UseReplaceKeyword keyword={searchKeyword} string={PostReport.writer} fontColor="#0048FF" /></S.Name>
                    <S.Name>{PostReport.school}</S.Name>
                    <S.UserType>{PostReport.userType}</S.UserType>
                </S.Info>
            </section>
            <S.Details>
                <S.Top>
                    <p>{PostReport.reportDate}</p>
                    <S.Button>본문 확인</S.Button>
                </S.Top>
                <S.Bottom>
                    <div>신고<p>{PostReport.history}회</p></div>
                    <S.Button>게시물 삭제</S.Button>
                </S.Bottom>
            </S.Details>
        </S.Wrapper>
    )
}
export default  ReportOfPost