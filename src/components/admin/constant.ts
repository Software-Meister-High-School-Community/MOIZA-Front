import { OptionArrType, PathType, SeeMoreOptionInterface } from '../../interface/Common/Common.type';

export type ManagementType = "REPORT" | "NOTIFICATION" | "AUTHORITY";

export const MANAGE_REPORT: ManagementType = "REPORT";
export const NOTIFICATION: ManagementType = "NOTIFICATION";
export const AUTHORITY: ManagementType = "AUTHORITY";

interface radioTypeInterface {
    id: string
    summary: string
}
export const TypeArr: radioTypeInterface[] = [
    {
        id: "users",
        summary: "사용자"
    },
    {
        id: "posts",
        summary: "게시물"
    },
    {
        id: "comments",
        summary: "답변"
    }
]

interface InputStyleType {
    [key: string]: {
        width: string;
        placeholder: string
    }
}

export const InputStyle: InputStyleType = {
    user: {
        width: "205",
        placeholder: "유저 이름 입력"
    },
    post: {
        width: "400",
        placeholder: "유저 이름 / 제목 입력"
    },
    comment: {
        width: "400",
        placeholder: "유저 이름 / 내용 입력"
    }
}

export const WriteNoticePathArr: PathType[] = [
    {
        path: "어드민 페이지",
        link: "/admin"
    },
    {
        path: "공지사항",
        link: "/admin?page-type=notification"
    },
    {
        path: "공지사항 작성",
        link: "/write-notification"
    }
]

type userType = "재학생" | "졸업생";
type postType = "question" | "common";
type NoticeType = "FIX" | "UNFIX";

export interface NoticePropsType {
    fix: NoticeType;
    title: string;
    view: number;
    heart: number
    postDate: string
}
export const NoticeListTestArray: NoticePropsType[] = [
    {
        fix: "FIX",
        title: "모이자에 오신 여러분 환영합니다!",
        view: 1200,
        heart: 599,
        postDate: "202201210829"
    },
    {
        fix: "FIX",
        title: "모이자와 함께하기 위해서는",
        view: 1210,
        heart: 599,
        postDate: "202201210829"
    },
    {
        fix: "UNFIX",
        title: "모이자에 오신 여러분 환영합니다!",
        view: 1350,
        heart: 599,
        postDate: "202201210829"
    }
]

export interface NoticeListResponseType {
    fix: NoticeType;
    title: string;
    date: string;
    view: number;
    heart: number
}
export const seeMoreOptionList: SeeMoreOptionInterface[] = [
    {
        option: "수정",
        onClickFunction: (() => console.log("ASd"))
    },
    {
        option: "삭제",
        onClickFunction: (() => console.log("ASd"))
    }
]