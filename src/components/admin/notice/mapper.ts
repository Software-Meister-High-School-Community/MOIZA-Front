import {NoticeListResponseType,NoticePropsType} from '../constants/index';

export const Mapper = (responseData:NoticeListResponseType):NoticePropsType => {
    return {
        fix : responseData.fix,
        title : responseData.title,
        view : responseData.view,
        heart : responseData.heart,
        postDate : responseData.date
    }
}