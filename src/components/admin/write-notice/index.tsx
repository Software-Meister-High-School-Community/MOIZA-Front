import React, {ChangeEvent, useCallback, useState} from "react";
import * as S from './styles'
import Path from "../../Common/path";
import {WriteNoticePathArr} from "../constants";
import Switch from "../../Common/toggle/switch";
import UploadFiles from "../../Common/upload/files";
import {UploadDataType} from "../../../interface/Common/Common.type";
import SubmitButton from "../../Common/Button/SubmitButton";

const TITLE = 'title';
const CONTENT = 'content';

const WriteNotice:React.FC = () => {
    const [isFix,setIsFix] = useState(false);
    const [noticeContent,setNoticeContent] = useState<UploadDataType>({
        title : '',
        content : '',
        files : []
    })
    const onChangeFixState = useCallback(
        () => {
            setIsFix((prev)=>!prev);
        }
    ,[isFix])
    const onChangeNoticeContent = useCallback(
        (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        if((e.target.name === TITLE && e.target.value.length <= 30) || (e.target.name===CONTENT && e.target.value.length <= 500)){
            setNoticeContent({
                ...noticeContent,
                [e.target.name] : e.target.value
            })
        }
    },[noticeContent])
    return(
        <S.Wrapper>
            <Path pathArray={WriteNoticePathArr}/>
            <S.InputContentBox>
                <S.Title>
                    <p>제목</p>
                    <label>
                        <input name={TITLE} onChange={onChangeNoticeContent} value={noticeContent.title}/>
                        <S.TextCount>{noticeContent.title.length}/30</S.TextCount>
                    </label>
                </S.Title>
                <strong>
                    <p>상단 고정</p>
                    <Switch
                        isFix={isFix}
                        onChangeFixState={onChangeFixState}
                    />
                </strong>
                <S.NoticeMainContent name={CONTENT} onChange={onChangeNoticeContent} value={noticeContent.content}/>
                <S.TextCount marginTop="15px">{noticeContent.content.length}/500</S.TextCount>
            </S.InputContentBox>
            <UploadFiles state={noticeContent} setStateFunction={setNoticeContent}/>
            <S.SubmitBtn>
                <SubmitButton
                    big={false}
                    text="작성완료"
                    handleClick={()=>console.log("asd")}
                    disable={!(noticeContent.title.length > 0 && noticeContent.content.length > 0)}
                    yellow={false}
                    blue={true}
                />
            </S.SubmitBtn>
        </S.Wrapper>
    )
}
export default WriteNotice