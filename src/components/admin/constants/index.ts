import {OptionArrType, PathType} from '../../../interface/Common/Common.type';

export const MANAGE_REPORT = "MANAGE-REPORT";
export const NOTIFICATION = "NOTIFICATION"

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

interface InputStyleType {
    [key : string] : {
        width : string;
        placeholder : string
    }
}

export const InputStyle:InputStyleType = {
    user : {
        width : "205",
        placeholder : "유저 이름 입력"
    },
    post : {
        width : "400",
        placeholder : "유저 이름 / 제목 입력"
    },
    comment : {
        width : "400",
        placeholder : "유저 이름 / 내용 입력"
    }
}

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
        link : "/admin"
    },
    {
        path : "공지사항",
        link : "/admin?page-type=notification"
    },
    {
        path : "공지사항 작성",
        link : "/write-notification"
    }
]

type userType = "재학생" | "졸업생"

export interface UserReportPropsType {
    name : string;
    school : string;
    userType : userType;
    wjdwl : number;
    now : number;
    histroy : number;
    userReport : number;
    postReport : number;
    commentReport : number;
}

export const UserReportTestArray:UserReportPropsType[] = [
    {
        name : '장정원',
        school : "미림마이스터고",
        userType : "재학생",
        wjdwl : 15,
        now : 7,
        histroy : 7,
        userReport : 3,
        postReport : 3,
        commentReport : 1
    },
    {
        name : '장정원',
        school : "미림마이스터고",
        userType : "재학생",
        wjdwl : 15,
        now : 7,
        histroy : 7,
        userReport : 3,
        postReport : 3,
        commentReport : 1
    },
    {
        name : '장정원',
        school : "미림마이스터고",
        userType : "재학생",
        wjdwl : 15,
        now : 7,
        histroy : 7,
        userReport : 3,
        postReport : 3,
        commentReport : 1
    },
]

type postType = "question" | "common"

export interface PostReportPropsType {
    postType : postType;
    title : string;
    writer : string;
    school : string;
    userType : userType;
    reportDate : string
    history  :number;
}

export const PostReportTestArray:PostReportPropsType[] = [
    {
        postType : "question",
        title : "장정원 싫어하는 사람들 모여봐",
        writer : "맹쓴쥬",
        school : "미림마이스터고",
        userType : "재학생",
        reportDate : "2021 / 11 / 03",
        history : 7
    },
    {
        postType : "common",
        title : "장정원 싫어하는 사람들 모여봐",
        writer : "맹쓴쥬",
        school : "미림마이스터고",
        userType : "재학생",
        reportDate : "2021 / 11 / 03",
        history : 7
    },
    {
        postType : "question",
        title : "장정원 싫어하는 사람들 모여봐",
        writer : "맹쓴쥬",
        school : "미림마이스터고",
        userType : "재학생",
        reportDate : "2021 / 11 / 03",
        history : 7
    },
]

export interface CommentReportPropsType {
    userName : string;
    school : string;
    userType : userType;
    history : number;
    reportDate : string;
    comment : string;
}

export const CommentReportTestArray:CommentReportPropsType[] = [
    {
        userName : "멩쓴쥬",
        school : "미림마이스터고",
        userType : "재학생",
        history : 7,
        reportDate : "2021 / 11 / 03",
        comment : "정원니 바보새기 이것도 몰라? 우리 할머니가 더 잘 아시겠다...... " + "ㅇ" + "3줄 끝.."
    },
    {
        userName : "멩쓴쥬1",
        school : "미림마이스터고",
        userType : "재학생",
        history : 8,
        reportDate : "2021 / 11 / 03",
        comment : "정원니 바보새기 이것도 몰라? 우리 할머니가 더 잘 아시겠다......   " + "ㅇ" + "3줄 끝.."
    },
]