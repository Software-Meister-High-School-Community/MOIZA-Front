import useComment from "../../../../hooks/post/comment/useComment";
import SubmitButton from "../../../Common/Button/SubmitButton";
import {
  PostReplyMakeFormBox,
  PostReplyMakeFormCountText,
  PostReplyMakeFormHeaderWrap,
  PostReplyMakeFormTextarea,
} from "./PostReplyMakeForm.style";

const PostReplyMakeForm = () => {
  const { makeCommentData, onChangeValue } = useComment();

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
        {makeCommentData.text}/500
      </PostReplyMakeFormCountText>
    </PostReplyMakeFormBox>
  );
};

export default PostReplyMakeForm;
