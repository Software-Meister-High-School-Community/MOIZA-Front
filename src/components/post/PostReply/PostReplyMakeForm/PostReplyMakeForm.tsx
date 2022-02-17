import useNestedComment from "../../../../hooks/post/comment/useComment";
import SubmitButton from "../../../Common/Button/SubmitButton";
import * as PRMF from "./PostReplyMakeForm.style";
import x from "../../../../assets/img/Common/x.svg";
import plus from "../../../../assets/img/Common/addFile.svg";

const PostReplyMakeForm = () => {
  const { makeCommentData, onChangeValue, onChangeFile, onRemoveFile } =
    useNestedComment();

  return (
    <PRMF.PostReplyMakeFormBox>
      <PRMF.PostReplyMakeFormHeaderWrap>
        <h1>답글</h1>
        <SubmitButton
          text="답글 등록"
          blue
          big
          disable={
            makeCommentData.text === "" && makeCommentData.picture.length === 0
          }
        />
      </PRMF.PostReplyMakeFormHeaderWrap>
      <PRMF.PostReplyMakeFormTextarea
        name="text"
        onChange={(e) => onChangeValue(e)}
        value={makeCommentData.text}
      />
      <PRMF.PostReplyMakeFormCountText>
        {makeCommentData.text.length}/500
      </PRMF.PostReplyMakeFormCountText>
      <PRMF.PostReplyMakeFormFileForm>
        <PRMF.PostReplyMakeFormFileHeaderWrap>
          <h1>첨부파일</h1>
          <p>{makeCommentData.picture.length}/4</p>
        </PRMF.PostReplyMakeFormFileHeaderWrap>
        <hr />
        <PRMF.PostReplyMakeFormFileMiddleWrap>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => onChangeFile(e, makeCommentData.picture.length)}
            id="commentFile"
          />
          {makeCommentData.picture.map((img) => {
            return (
              <PRMF.PostReplyMakeFormFileItemWrap>
                <PRMF.PostReplyMakeFormFileImg alt={img.id} />
                <PRMF.PostReplyMakeFormFileItemBottomWrap>
                  <pre>{img.name}</pre>
                  <button onClick={() => onRemoveFile(img.id)}>
                    <img src={x} alt="cancle" />
                  </button>
                </PRMF.PostReplyMakeFormFileItemBottomWrap>
              </PRMF.PostReplyMakeFormFileItemWrap>
            );
          })}
          {makeCommentData.picture.length !== 4 && (
            <PRMF.PostReplyMakeFormFileAddLabel htmlFor="commentFile">
              <img src={plus} alt="addFile" />
            </PRMF.PostReplyMakeFormFileAddLabel>
          )}
        </PRMF.PostReplyMakeFormFileMiddleWrap>
      </PRMF.PostReplyMakeFormFileForm>
    </PRMF.PostReplyMakeFormBox>
  );
};

export default PostReplyMakeForm;
