import { ICommnet } from "../../../../interface/Post/Post.type";
import {
  PostReplyCommentBox,
  PostReplyCommentHeaderWrap,
  PostReplyCommentProfileImg,
  PostReplyCommentWriterWrap,
  PostReplyCommentBreakPoint,
  PostReplyCommentDate,
  PostReplyCommentMenuButton,
  PostReplyCommentMiddleWrap,
  PostReplyCommentContentText,
} from "./PostReplyComment.style";
import menuCircle from "../../../../assets/img/post/menuCircle.svg";

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
        <PostReplyCommentWriterWrap>
          <span>
            <strong>{commentData.name}</strong>
          </span>
          <PostReplyCommentBreakPoint />
          <span>{commentData.school}</span>
          <PostReplyCommentBreakPoint />
          <span>{commentData.studentState}</span>
        </PostReplyCommentWriterWrap>
        <PostReplyCommentDate>{commentData.createDate}</PostReplyCommentDate>
        <PostReplyCommentMenuButton>
          <img src={menuCircle} />
        </PostReplyCommentMenuButton>
      </PostReplyCommentHeaderWrap>
      <PostReplyCommentMiddleWrap>
        <PostReplyCommentContentText
          withPicture={commentData.picture.length ? true : false}
        >
          {commentData.text}
        </PostReplyCommentContentText>
      </PostReplyCommentMiddleWrap>
    </PostReplyCommentBox>
  );
};

export default PostReplyComment;
