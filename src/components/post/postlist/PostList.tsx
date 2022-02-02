import React, { useState } from "react";
import * as S from "./style";
import Vector from "../../../assets/img/post/Vector.svg";
import Path from "../../Common/path";
import { PostListPathArr } from "../constants";
import Dropdown from "../../Common/Select/dropdown";
import { OptionArr } from "../constants";
import RadioButton from "../../Common/Select/RadioButton";
import { TypeArr } from "../constants";
import PostForm from "../../Common/postform/PostForm";

const PostList: React.FC = () => {
  const [value, setValue] = useState(OptionArr[0].option);
  const [seleted, setSeleted] = useState("all");

  return (
    <S.Wrapper>
      <S.PostWrapper>
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
              options={OptionArr}
            />
          </S.SelectDiv>
          <S.PosFormtDiv>
            <PostForm />
          </S.PosFormtDiv>
        </S.PostDiv>
      </S.PostWrapper>
      <S.WriteDiv>
        <S.WriteBtn />
      </S.WriteDiv>
    </S.Wrapper>
  );
};

export default PostList;
