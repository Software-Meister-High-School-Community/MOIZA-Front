import {OptionArrType, PathType} from '../../../interface/Common/Common.type';

interface TypeArrType {
    id : string
    summary : string
}
export const TypeArr:TypeArrType[] = [
    {
        id : "users",
        summary : "사용자"
    },
    {
        id : "posts",
        summary : "게시물"
    },
    {
        id : "comments",
        summary : "답변"
    }
]

export const OptionArr:OptionArrType[] = [
    {
        option : "최신 순"
    },
    {
        option : "오래된 순"
    },
    {
        option : "조회수 순"
    },
    {
        option : "좋아요 순"
    },
]
export const WriteNoticePathArr:PathType[] = [
    {
        path : "어드민 페이지",
        link : ""
    },
    {
        path : "공지사항",
        link : ""
    },
    {
        path : "공지사항 작성",
        link : ""
    }
]