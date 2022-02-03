import {PostReportResponseType,PostReportPropsType} from '../../../constants/index';

export const Mapper = (responseData:PostReportResponseType):PostReportPropsType => {
    return {
        postType : responseData.postType,
        title : responseData.title,
        writer : responseData.writer,
        school : responseData.school,
        userType : responseData.userType,
        reportDate : responseData.reportDate,
        history  :responseData.history
    }
}