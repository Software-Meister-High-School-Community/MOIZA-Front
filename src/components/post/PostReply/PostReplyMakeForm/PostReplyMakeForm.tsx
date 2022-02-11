import { useEffect } from "react";
import useNestedComment from "../../../../hooks/post/comment/useComment";
import SubmitButton from "../../../Common/Button/SubmitButton";
import {
  PostReplyMakeFormBox,
  PostReplyMakeFormCountText,
  PostReplyMakeFormFileForm,
  PostReplyMakeFormFileHeaderWrap,
  PostReplyMakeFormFileMiddleWrap,
  PostReplyMakeFormHeaderWrap,
  PostReplyMakeFormTextarea,
} from "./PostReplyMakeForm.style";

const PostReplyMakeForm = () => {
  const { makeCommentData, onChangeValue } = useNestedComment();

  return (
    <PostReplyMakeFormBox>
      <PostReplyMakeFormHeaderWrap>
        <h1>답글</h1>
        <SubmitButton
          text="답글 등록"
          blue
          big
          disable={
            makeCommentData.text === "" && makeCommentData.picture.length === 0
          }
        />
      </PostReplyMakeFormHeaderWrap>
      <PostReplyMakeFormTextarea
        name="text"
        onChange={(e) => onChangeValue(e)}
        value={makeCommentData.text}
      />
      <PostReplyMakeFormCountText>
        {makeCommentData.text.length}/500
      </PostReplyMakeFormCountText>
      <PostReplyMakeFormFileForm>
        <PostReplyMakeFormFileHeaderWrap>
          <h1>첨부파일</h1>
          <p>{makeCommentData.picture.length}/4</p>
        </PostReplyMakeFormFileHeaderWrap>
        <hr />
        <PostReplyMakeFormFileMiddleWrap></PostReplyMakeFormFileMiddleWrap>
      </PostReplyMakeFormFileForm>
    </PostReplyMakeFormBox>
  );
};

export default PostReplyMakeForm;
