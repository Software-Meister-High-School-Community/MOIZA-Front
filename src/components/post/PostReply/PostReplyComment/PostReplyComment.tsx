import { ICommnet } from "../../../../interface/Post/Post.type";
import { PostReplyCommentHeaderWrap } from "../PostReply.style";
import {
  PostReplyCommentBox,
  PostReplyCommentProfileImg,
} from "./PostReplyComment.style";

interface IPostReplyCommentProps {
  commentData: ICommnet;
}

const PostReplyComment: React.FC<IPostReplyCommentProps> = ({
  commentData,
}) => {
  return (
    <PostReplyCommentBox>
      <PostReplyCommentHeaderWrap>
        <PostReplyCommentProfileImg />
      </PostReplyCommentHeaderWrap>
    </PostReplyCommentBox>
  );
};

export default PostReplyComment;
