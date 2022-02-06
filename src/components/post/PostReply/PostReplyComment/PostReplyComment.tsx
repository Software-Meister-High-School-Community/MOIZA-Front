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
  PostReplyCommentButtomWrap,
  PostReplyCommentCommentWrap,
} from "./PostReplyComment.style";
import menuCircle from "../../../../assets/img/post/menuCircle.svg";
import commentIcon from "../../../../assets/img/post/Comment.svg";
import ImgSplit from "../../ImgSplit";

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
        <ImgSplit width={380} imgs={commentData.picture} />
      </PostReplyCommentMiddleWrap>
      <PostReplyCommentButtomWrap>
        <PostReplyCommentCommentWrap>
          <PostReplyCommentCommentWrap>
            <img src={commentIcon} alt="comment" />
            {commentData.commentOfComment?.length || "0"}
          </PostReplyCommentCommentWrap>
        </PostReplyCommentCommentWrap>
      </PostReplyCommentButtomWrap>
    </PostReplyCommentBox>
  );
};

export default PostReplyComment;
