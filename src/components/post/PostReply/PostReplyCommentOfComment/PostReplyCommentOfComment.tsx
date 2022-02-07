import React from "react";
import useComment from "../../../../hooks/post/comment/useComment";
import { ICommnet } from "../../../../interface/Post/Post.type";
import {
  PostReplyCOCBox,
  PostReplyCOCFileInputLabel,
  PostReplyCOCImgBox,
  PostReplyCOCImgWrap,
  PostReplyCOCInputWrap,
  PostReplyCOCSubmitButton,
  PostReplyCOCTextarea,
  PostReplyCOCtextInputWrap,
} from "./PostReplyCommentOfComment.style";
import camera from "../../../../assets/img/Common/camera.svg";

interface IPostReplyCommentOfCommentProps {
  commentOfComment?: ICommnet[];
}

const PostReplyCommentOfComment: React.FC<IPostReplyCommentOfCommentProps> = ({
  commentOfComment,
}) => {
  const { makeCommentData, onChangeValue, onChangeFile } = useComment();

  return (
    <>
      <PostReplyCOCBox>
        <PostReplyCOCInputWrap>
          <p>{makeCommentData.text.length}/500?</p>
          <PostReplyCOCtextInputWrap>
            <PostReplyCOCTextarea
              name="text"
              onChange={(e) => onChangeValue(e)}
            />
            <PostReplyCOCSubmitButton>등록</PostReplyCOCSubmitButton>
          </PostReplyCOCtextInputWrap>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => onChangeFile(e)}
            id="commentFile"
          />
          <PostReplyCOCFileInputLabel htmlFor="commentFile">
            <img src={camera} alt="add picture" />
            <strong>사진</strong>
            {makeCommentData.picture.length}/4
          </PostReplyCOCFileInputLabel>
          <PostReplyCOCImgBox>
            <PostReplyCOCImgWrap></PostReplyCOCImgWrap>
          </PostReplyCOCImgBox>
        </PostReplyCOCInputWrap>
      </PostReplyCOCBox>
    </>
  );
};

export default PostReplyCommentOfComment;
