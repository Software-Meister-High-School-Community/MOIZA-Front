import {CommentReportResponseType,CommentReportPropsType} from '../../../constants/index'

export const Mapper = (responseData:CommentReportResponseType):CommentReportPropsType => {
    return {
        userName : responseData.name,
        school : responseData.school,
        userType : responseData.type,
        history : responseData.history,
        reportDate : responseData.reportDate,
        comment : responseData.commnet
    }
}