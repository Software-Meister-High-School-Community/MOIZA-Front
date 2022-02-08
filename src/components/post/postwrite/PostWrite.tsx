import React, { useState, useCallback } from "react";
import * as S from "./style";
import Path from "../../Common/path";
import { PostWritePathArr } from "../constants";
import { UploadDataType } from "../../../interface/Common/Common.type";
import { ChangeEvent } from "react";
import RadioButton from "../../Common/Select/RadioButton";
import { RadioTypeArr } from "../constants";
import UploadFiles from "../../Common/upload/files";
import SubmitButton from "../../Common/Button/SubmitButton";

const TITLE = "title";
const CONTENT = "content";

const PostWrite: React.FC = () => {
  const FD = new FormData();
  const [postContent, setPostContent] = useState<UploadDataType>({
    title: "",
    content: "",
    files: [],
  });
  const [seleted, setSeleted] = useState("question");

  const onChangePostContent = useCallback(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      if (
        (e.target.name === TITLE && e.target.value.length <= 30) ||
        (e.target.name === CONTENT && e.target.value.length <= 500)
      ) {
        setPostContent({
          ...postContent,
          [e.target.name]: e.target.value,
        });
      }
    },
    [postContent, setPostContent]
  );

  const onSubmitPost = useCallback(() => {
    FD.append("title", postContent.title);
    FD.append("content", postContent.content);
    postContent.files.map((eachFile) => FD.append("files", eachFile));
  }, [postContent]);

  return (
    <S.Wrapper>
      <Path pathArray={PostWritePathArr} />
      <S.WriteForm>
        <S.Title>
          <p>제목</p>
          <label>
            <input
              name={TITLE}
              onChange={onChangePostContent}
              value={postContent.title}
            />
            <S.TextCount>{postContent.title.length}/30</S.TextCount>
          </label>
        </S.Title>
        <S.RadioDiv>
          <RadioButton
            selected={seleted}
            setSelected={setSeleted}
            radioArray={RadioTypeArr}
            name="typecheckbox"
          />
          <S.TempList>임시저장 게시물&gt;</S.TempList>
        </S.RadioDiv>
        <S.PostMainContent
          name={CONTENT}
          onChange={onChangePostContent}
          value={postContent.content}
        />
        <S.TextCount marginTop="15px">
          {postContent.content.length}/500
        </S.TextCount>
      </S.WriteForm>
      <UploadFiles state={postContent} setStateFunction={setPostContent} />
      <S.SubmitBtn>
        <SubmitButton
          big={true}
          text="임시 저장"
          handleClick={
            onSubmitPost
          } /*임시저장 리스트로 보내는 함수 서버 나오면 만들기 */
          disable={
            !(postContent.title.length > 0 && postContent.content.length > 0)
          }
          yellow={false}
          blue={false}
        />
        <SubmitButton
          big={true}
          text="작성완료"
          handleClick={onSubmitPost}
          disable={
            !(postContent.title.length > 0 && postContent.content.length > 0)
          }
          yellow={false}
          blue={true}
        />
      </S.SubmitBtn>
    </S.Wrapper>
  );
};

export default PostWrite;
