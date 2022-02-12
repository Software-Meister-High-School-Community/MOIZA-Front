import React, { useEffect } from "react";
import { ICommnet } from "../../../../interface/Post/Post.type";
import * as PRCOC from "./PostReplyCommentOfComment.style";
import camera from "../../../../assets/img/Common/camera.svg";
import x from "../../../../assets/img/Common/x.svg";
import PostReplyCOCForm from "./PostReplyCOCForm";
import useComment from "../../../../hooks/post/comment/useComment";

interface IPostReplyCommentOfCommentProps {
  commentOfComment?: ICommnet[];
  id: number;
}

const PostReplyCommentOfComment: React.FC<IPostReplyCommentOfCommentProps> = ({
  commentOfComment,
  id,
}) => {
  const {
    makeCommentData,
    currentShowCOC,
    setCurrentShowCOC,
    onChangeValue,
    onChangeFile,
    onRemoveFile,
    onSubmitNestedReply,
  } = useComment();

  useEffect(() => {
    if (commentOfComment) {
      setCurrentShowCOC(commentOfComment);
    }
  }, [setCurrentShowCOC, commentOfComment]);

  return (
    <>
      <PRCOC.PostReplyCOCBox>
        <PRCOC.PostReplyCOCInputWrap>
          <p>{makeCommentData.text.length}/500?</p>
          <PRCOC.PostReplyCOCtextInputWrap>
            <PRCOC.PostReplyCOCTextarea
              name="text"
              onChange={(e) => onChangeValue(e)}
              value={makeCommentData.text}
            />
            <PRCOC.PostReplyCOCSubmitButton
              onClick={() => onSubmitNestedReply(makeCommentData)}
            >
              등록
            </PRCOC.PostReplyCOCSubmitButton>
          </PRCOC.PostReplyCOCtextInputWrap>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => onChangeFile(e, makeCommentData.picture.length)}
            id={`commentOfCommentFile${id}`}
          />
          <PRCOC.PostReplyCOCFileInputLabel
            htmlFor={`commentOfCommentFile${id}`}
          >
            <img src={camera} alt="addPicture" />
            <strong>사진</strong>
            {makeCommentData.picture.length}/4
          </PRCOC.PostReplyCOCFileInputLabel>
          <PRCOC.PostReplyCOCImgBox>
            {makeCommentData.picture.map((img) => {
              return (
                <PRCOC.PostReplyCOCImgWrap id={img.id}>
                  <PRCOC.PostReplyCOCImg />
                  <PRCOC.PostReplyCOCImgBottomWrap>
                    <p>{img.name}</p>
                    <PRCOC.PostReplyCOCImgBottomButton
                      onClick={() => onRemoveFile(img.id)}
                    >
                      <img src={x} alt="cancle" />
                    </PRCOC.PostReplyCOCImgBottomButton>
                  </PRCOC.PostReplyCOCImgBottomWrap>
                </PRCOC.PostReplyCOCImgWrap>
              );
            })}
          </PRCOC.PostReplyCOCImgBox>
        </PRCOC.PostReplyCOCInputWrap>
        <PRCOC.PostReplyCOCLine isInputHr={true} />
        <PRCOC.PostReplyCommentWrap>
          {currentShowCOC?.length !== 0 && (
            <>
              {currentShowCOC?.map((comment) => {
                return (
                  <React.Fragment>
                    <PostReplyCOCForm commentOfComment={comment} />
                    <PRCOC.PostReplyCOCLine isInputHr={false} />
                  </React.Fragment>
                );
              })}
            </>
          )}
        </PRCOC.PostReplyCommentWrap>
      </PRCOC.PostReplyCOCBox>
    </>
  );
};

export default PostReplyCommentOfComment;
