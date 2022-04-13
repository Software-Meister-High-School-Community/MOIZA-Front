import React from 'react'
import * as S from './styles'
import { CommentReportPropsType } from '../../../constants'
import UseReplaceKeyword from '../../../../Common/search/replaceKeyword/index'
import { removeComment } from '../../../../../api/comments'

interface PropsType {
    commentProps: CommentReportPropsType
    searchKeyword: string
}

const ReportsofComment: React.FC<PropsType> = ({ commentProps, searchKeyword }) => {
    const onClickRemoveComment = () => {
        removeComment(1)
    }
    return (
        <S.Wrapper>
            <div style={{ display: "flex" }}>
                <S.UserInfo>
                    <img />
                    <S.Name>
                        <UseReplaceKeyword fontColor="#0048FF" keyword={searchKeyword} string={commentProps.userName} />
                    </S.Name>
                    <S.School>{commentProps.school}</S.School>
                    <S.UserType>{commentProps.userType}</S.UserType>
                </S.UserInfo>
                <S.ReportInfo>
                    <S.ReportCount>신고 <p>{commentProps.history}</p>회</S.ReportCount>
                    <S.Day>{commentProps.reportDate}</S.Day>
                </S.ReportInfo>
            </div>
            <S.ReportMainContent>
                <S.ReportContent>
                    <UseReplaceKeyword fontColor="#0048FF" keyword={searchKeyword} string={commentProps.comment} />
                </S.ReportContent>
                <S.Buttons>
                    <button>본문 확인</button>
                    <button onClick={onClickRemoveComment}>답변 삭제</button>
                </S.Buttons>
            </S.ReportMainContent>
        </S.Wrapper>
    )
}
export default ReportsofComment