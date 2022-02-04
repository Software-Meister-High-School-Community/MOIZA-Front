import React from "react";
import * as S from "./style";
import Path from "../../Common/path";
import { PostWritePathArr } from "../constants";

const PostWrite: React.FC = () => {
  return (
    <S.Wrapper>
      <S.WriteHead>
        <Path pathArray={PostWritePathArr} />
      </S.WriteHead>
      <S.WriteForm></S.WriteForm>
    </S.Wrapper>
  );
};

export default PostWrite;
