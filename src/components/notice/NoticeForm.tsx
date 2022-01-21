import React, { useState } from "react";
import * as S from "./style";
import Path from "../Common/path";
import { PathArr } from "./constants/index";
import Dropdown from "../Common/Select/dropdown";
import { OptionArr } from "../admin/constants";
import NoticePost from "./noticePost/NoticePost";

const NoticeForm: React.FC = () => {
  const [value, setValue] = useState(OptionArr[0].option);
  return (
    <S.Wrapper>
      <S.NoticeHeadDiv>
        <Path pathArray={PathArr} />
        <S.NoticeNameDiv>
          <S.NoticeName>공지사항</S.NoticeName>
        </S.NoticeNameDiv>
      </S.NoticeHeadDiv>
      <S.PostDiv>
        <S.SelectDiv>
          <Dropdown
            value={value}
            onChangeValue={setValue}
            options={OptionArr}
          />
        </S.SelectDiv>
        <S.Post>
          <NoticePost />
        </S.Post>
      </S.PostDiv>
    </S.Wrapper>
  );
};

export default NoticeForm;
