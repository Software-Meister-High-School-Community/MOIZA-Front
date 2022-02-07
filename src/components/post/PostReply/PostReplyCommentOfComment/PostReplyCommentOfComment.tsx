import React from "react";
import useComment from "../../../../hooks/post/comment/useComment";
import { ICommnet } from "../../../../interface/Post/Post.type";
import {
  PostReplyCOCBox,
  PostReplyCOCInputWrap,
} from "./PostReplyCommentOfComment.style";

interface IPostReplyCommentOfCommentProps {
  commentOfComment?: ICommnet[];
}

const PostReplyCommentOfComment: React.FC<IPostReplyCommentOfCommentProps> = ({
  commentOfComment,
}) => {
  const { makeCommentData, onChangeValue } = useComment();

  return (
    <>
      <PostReplyCOCBox>
        <PostReplyCOCInputWrap>
          <p>{makeCommentData.text.length}/500?</p>
        </PostReplyCOCInputWrap>
      </PostReplyCOCBox>
    </>
  );
};

export default PostReplyCommentOfComment;
