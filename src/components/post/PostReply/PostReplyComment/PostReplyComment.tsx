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
  PostReplyCommentBottomWrap,
  PostReplyCommentCommentWrap,
} from "./PostReplyComment.style";
import menuCircle from "../../../../assets/img/post/menuCircle.svg";
import commentIcon from "../../../../assets/img/post/Comment.svg";
import ImgSplit from "../../ImgSplit";
import { useState } from "react";
import PostReplyCommentOfComment from "../PostReplyCommentOfComment";

interface IPostReplyCommentProps {
  commentData: ICommnet;
}

const PostReplyComment: React.FC<IPostReplyCommentProps> = ({
  commentData,
}) => {
  const [fold, setFold] = useState(true);

  return (
    <>
      <PostReplyCommentBox fold={fold}>
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
          <ImgSplit width={380} imgs={commentData.picture} gap={10} />
        </PostReplyCommentMiddleWrap>
        <PostReplyCommentBottomWrap>
          <PostReplyCommentCommentWrap onClick={() => setFold(!fold)}>
            <img src={commentIcon} alt="comment" />
            {commentData.commentOfComment?.length || "0"}
          </PostReplyCommentCommentWrap>
        </PostReplyCommentBottomWrap>
      </PostReplyCommentBox>
      {!fold && (
        <PostReplyCommentOfComment
          commentOfComment={commentData.commentOfComment}
        />
      )}
    </>
  );
};

export default PostReplyComment;
