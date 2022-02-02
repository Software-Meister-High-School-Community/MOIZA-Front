import React, { useState } from "react";
import * as S from "./style";
import Path from "../../Common/path";
import { NoticeListPathArr } from "../constants/index";
import Dropdown from "../../Common/Select/dropdown";
import { OptionArr } from "../../admin/constants";
import NoticePost from "../noticePost/NoticePost";
import PagiNation from "../../Common/pagination/Pagination";

const NoticeList: React.FC = () => {
  const [value, setValue] = useState(OptionArr[0].option);
  const [pagenation, setPagenation] = useState(1);

  return (
    <S.Wrapper>
      <S.NoticeHeadDiv>
        <Path pathArray={NoticeListPathArr} />
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
        <nav className="pagenation">
          <PagiNation
            total={5}
            limit={1}
            page={pagenation}
            setPage={setPagenation}
          />
        </nav>
      </S.PostDiv>
    </S.Wrapper>
  );
};

export default NoticeList;
