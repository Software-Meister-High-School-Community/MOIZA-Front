import {OptionArrType,SeeMoreOptionInterface} from '../../interface/Common/Common.type';

interface TypeArrType {
    id : string
    summary : string
}

export const MypageOptionArray:TypeArrType[] = [
    {
        id : "question",
        summary : "질문"
    },
    {
        id : "common",
        summary : "일반"
    }
]

export const FieldOptionArray:OptionArrType[] = [
    {
        option : "모든 분야"
    },
    {
        option : "Front-End"
    },
    {
        option : "Back-End"
    },
    {
        option : "iOS"
    },
    {
        option : "Android"
    },
    {
        option: "Design"
    },
    {
        option: "Game"
    },
    {
        option: "Security"
    },
    {
        option: "Embedded"
    },
    {
        option: "AI"
    }
]
export const SortOptionArray:OptionArrType[] = [
    {
        option : "최신 순"
    },
    {
        option : "오래된 순"
    },
    {
        option : "조회수 "
    },
    {
        option : "좋아요 순"
    }
]

export const seeMoreOptionList:SeeMoreOptionInterface[] = [
    {
        option : "신고",
        onClickFunction : (()=>console.log("ASd"))
    }
]