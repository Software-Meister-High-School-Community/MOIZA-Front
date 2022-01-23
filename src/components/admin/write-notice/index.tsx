import React, {useCallback, useState} from "react";
import * as S from './styles'
import Path from "../../Common/path";
import {WriteNoticePathArr} from "../constants";
import Switch from "../../Common/toggle/switch";
import UploadFiles from "../../Common/upload/files";
import {UploadDataType} from "../../../interface/Common/Common.type";

const WriteNotice:React.FC = () => {
    const [isFix,setIsFix] = useState(false);
    const [noticeContent,setNoticeContent] = useState<UploadDataType>({
        title : '',
        content : '',
        files : []
    })
    console.log(noticeContent)
    const onChangeFixState = useCallback(
        () => {
            setIsFix((prev)=>!prev);
        }
    ,[isFix])
    return(
        <S.Wrapper>
            <Path pathArray={WriteNoticePathArr}/>
            <S.InputContentBox>
                <S.Title>
                    <p>제목</p>
                    <input/>
                </S.Title>
                <em>
                    <p>상단 고정</p>
                    <Switch
                        isFix={isFix}
                        onChangeFixState={onChangeFixState}
                    />
                </em>
                <S.NoticeMainContent/>
            </S.InputContentBox>
            <UploadFiles state={noticeContent} setStateFunction={setNoticeContent}/>
        </S.Wrapper>
    )
}
export default WriteNotice