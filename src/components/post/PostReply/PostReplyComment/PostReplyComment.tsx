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
  PostReplyCommentLine,
} from "./PostReplyComment.style";
import menuCircle from "../../../../assets/img/post/menuCircle.svg";
import commentIcon from "../../../../assets/img/post/Comment.svg";
import ImgSplit from "../../../Common/ImgSplit";
import { useState } from "react";
import PostReplyCommentOfComment from "../PostReplyCommentOfComment";

interface IPostReplyCommentProps {
  commentData: ICommnet;
  id: number;
}

const PostReplyComment: React.FC<IPostReplyCommentProps> = ({
  commentData,
  id,
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
            <img src={menuCircle} alt="menu" />
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
        <>
          <PostReplyCommentOfComment
            commentOfComment={commentData.commentOfComment}
            id={id}
          />
          <PostReplyCommentLine />
        </>
      )}
    </>
  );
};

export default PostReplyComment;
