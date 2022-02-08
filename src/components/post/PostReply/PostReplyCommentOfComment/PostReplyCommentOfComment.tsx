import React, { useEffect } from "react";
import useComment from "../../../../hooks/post/comment/useComment";
import { ICommnet } from "../../../../interface/Post/Post.type";
import {
  PostReplyCOCBox,
  PostReplyCOCFileInputLabel,
  PostReplyCOCImg,
  PostReplyCOCImgBottomButton,
  PostReplyCOCImgBottomWrap,
  PostReplyCOCImgBox,
  PostReplyCOCImgWrap,
  PostReplyCOCInputWrap,
  PostReplyCOCLine,
  PostReplyCOCSubmitButton,
  PostReplyCOCTextarea,
  PostReplyCOCtextInputWrap,
  PostReplyCommentWrap,
} from "./PostReplyCommentOfComment.style";
import camera from "../../../../assets/img/Common/camera.svg";
import x from "../../../../assets/img/Common/x.svg";
import PostReplyCOCForm from "./PostReplyCOCForm";

interface IPostReplyCommentOfCommentProps {
  commentOfComment?: ICommnet[];
}

const PostReplyCommentOfComment: React.FC<IPostReplyCommentOfCommentProps> = ({
  commentOfComment,
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
      <PostReplyCOCBox>
        <PostReplyCOCInputWrap>
          <p>{makeCommentData.text.length}/500?</p>
          <PostReplyCOCtextInputWrap>
            <PostReplyCOCTextarea
              name="text"
              onChange={(e) => onChangeValue(e)}
              value={makeCommentData.text}
            />
            <PostReplyCOCSubmitButton
              onClick={() => onSubmitNestedReply(makeCommentData)}
            >
              등록
            </PostReplyCOCSubmitButton>
          </PostReplyCOCtextInputWrap>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => onChangeFile(e)}
            id="commentFile"
          />
          <PostReplyCOCFileInputLabel htmlFor="commentFile">
            <img src={camera} alt="addPicture" />
            <strong>사진</strong>
            {makeCommentData.picture.length}/4
          </PostReplyCOCFileInputLabel>
          <PostReplyCOCImgBox>
            {makeCommentData.picture.map((img) => {
              return (
                <PostReplyCOCImgWrap>
                  <PostReplyCOCImg />
                  <PostReplyCOCImgBottomWrap>
                    <p>{img.name}</p>
                    <PostReplyCOCImgBottomButton
                      onClick={() => onRemoveFile(img.id)}
                    >
                      <img src={x} alt="cancle" />
                    </PostReplyCOCImgBottomButton>
                  </PostReplyCOCImgBottomWrap>
                </PostReplyCOCImgWrap>
              );
            })}
          </PostReplyCOCImgBox>
        </PostReplyCOCInputWrap>
        <PostReplyCOCLine isInputHr={true} />
        <PostReplyCommentWrap>
          {currentShowCOC?.length !== 0 && (
            <>
              {currentShowCOC?.map((comment) => {
                return (
                  <React.Fragment>
                    <PostReplyCOCForm commentOfComment={comment} />
                    <PostReplyCOCLine isInputHr={false} />
                  </React.Fragment>
                );
              })}
            </>
          )}
        </PostReplyCommentWrap>
      </PostReplyCOCBox>
    </>
  );
};

export default PostReplyCommentOfComment;
