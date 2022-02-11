import useNestedComment from "../../../../hooks/post/comment/useComment";
import SubmitButton from "../../../Common/Button/SubmitButton";
import {
  PostReplyMakeFormBox,
  PostReplyMakeFormCountText,
  PostReplyMakeFormFileAddLabel,
  PostReplyMakeFormFileForm,
  PostReplyMakeFormFileHeaderWrap,
  PostReplyMakeFormFileImg,
  PostReplyMakeFormFileItemBottomWrap,
  PostReplyMakeFormFileItemWrap,
  PostReplyMakeFormFileMiddleWrap,
  PostReplyMakeFormHeaderWrap,
  PostReplyMakeFormTextarea,
} from "./PostReplyMakeForm.style";
import x from "../../../../assets/img/Common/x.svg";
import plus from "../../../../assets/img/Common/addFile.svg";

const PostReplyMakeForm = () => {
  const { makeCommentData, onChangeValue, onChangeFile, onRemoveFile } =
    useNestedComment();

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
        <PostReplyMakeFormFileMiddleWrap>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => onChangeFile(e, makeCommentData.picture.length)}
            id="commentFile"
          />
          {makeCommentData.picture.map((img) => {
            return (
              <PostReplyMakeFormFileItemWrap>
                <PostReplyMakeFormFileImg alt={img.id} />
                <PostReplyMakeFormFileItemBottomWrap>
                  <pre>{img.name}</pre>
                  <button onClick={() => onRemoveFile(img.id)}>
                    <img src={x} alt="cancle" />
                  </button>
                </PostReplyMakeFormFileItemBottomWrap>
              </PostReplyMakeFormFileItemWrap>
            );
          })}
          {makeCommentData.picture.length !== 4 && (
            <PostReplyMakeFormFileAddLabel htmlFor="commentFile">
              <img src={plus} alt="addFile" />
            </PostReplyMakeFormFileAddLabel>
          )}
        </PostReplyMakeFormFileMiddleWrap>
      </PostReplyMakeFormFileForm>
    </PostReplyMakeFormBox>
  );
};

export default PostReplyMakeForm;
