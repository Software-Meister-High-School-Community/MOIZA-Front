import React, { useState } from "react";
import * as S from "./style";
import Vector from "../../../assets/img/post/vector.svg";
import Write from "../../../assets/img/common/writePen.svg";
import Path from "../../Common/path";
import { PostListPathArr } from "../constants";
import Dropdown from "../../Common/Select/dropdown";
import RadioButton from "../../Common/Select/RadioButton";
import { TypeArr } from "../constants";
import PostForm from "../../Common/postform/PostForm";
import PagiNation from "../../Common/pagination/Pagination";
import { sortOptions } from "../../Common/Select/dropdown/options";

const PostList: React.FC = () => {
  const [value, setValue] = useState(sortOptions[0].option);
  const [seleted, setSeleted] = useState("all");
  const [pagenation, setPagenation] = useState(1);

  return (
    <>
      <S.WriteBtn>
        <img src={Write} alt="" />
      </S.WriteBtn>
      <S.Wrapper>
        <S.PostHeadDiv>
          <Path pathArray={PostListPathArr} />
          <S.PostNameDiv>
            <S.PostName>OOO 커뮤니티</S.PostName>
            <S.PostVector src={Vector} alt="" />
          </S.PostNameDiv>
        </S.PostHeadDiv>
        <S.PostDiv>
          <S.SelectDiv>
            <S.RadioBtnDiv>
              <RadioButton
                selected={seleted}
                setSelected={setSeleted}
                radioArray={TypeArr}
                name="typecheckbox"
              />
            </S.RadioBtnDiv>
            <Dropdown
              value={value}
              onChangeValue={setValue}
              options={sortOptions}
            />
          </S.SelectDiv>
          <S.PosFormtDiv>
            <PostForm />
          </S.PosFormtDiv>
        </S.PostDiv>
        <nav className="pagenation">
          <PagiNation
            total={5}
            limit={1}
            page={pagenation}
            setPage={setPagenation}
          />
        </nav>
      </S.Wrapper>
    </>
  );
};

export default PostList;
