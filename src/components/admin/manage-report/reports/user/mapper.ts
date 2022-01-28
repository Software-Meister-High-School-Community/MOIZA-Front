import {UserReportResponseType,UserReportPropsType} from '../../../constants/index';

export const UserCommentMapper = (responseData:UserReportResponseType):UserReportPropsType => {
    return {
        name : responseData.name,
        school : responseData.school,
        userType : responseData.userType,
        wjdwl : responseData.freeze,
        now : responseData.now,
        histroy : responseData.history,
        userReport : responseData.userReport,
        postReport : responseData.postReport,
        commentReport : responseData.commentReport
    }
}