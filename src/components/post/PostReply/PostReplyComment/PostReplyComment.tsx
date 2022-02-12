import { ICommnet } from "../../../../interface/Post/Post.type";
import * as PRC from "./PostReplyComment.style";
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
      <PRC.PostReplyCommentBox fold={fold}>
        <PRC.PostReplyCommentHeaderWrap>
          <PRC.PostReplyCommentProfileImg />
          <PRC.PostReplyCommentWriterWrap>
            <span>
              <strong>{commentData.name}</strong>
            </span>
            <PRC.PostReplyCommentBreakPoint />
            <span>{commentData.school}</span>
            <PRC.PostReplyCommentBreakPoint />
            <span>{commentData.studentState}</span>
          </PRC.PostReplyCommentWriterWrap>
          <PRC.PostReplyCommentDate>
            {commentData.createDate}
          </PRC.PostReplyCommentDate>
          <PRC.PostReplyCommentMenuButton>
            <img src={menuCircle} alt="menu" />
          </PRC.PostReplyCommentMenuButton>
        </PRC.PostReplyCommentHeaderWrap>
        <PRC.PostReplyCommentMiddleWrap>
          <PRC.PostReplyCommentContentText
            withPicture={commentData.picture.length ? true : false}
          >
            {commentData.text}
          </PRC.PostReplyCommentContentText>
          <ImgSplit width={380} imgs={commentData.picture} gap={10} />
        </PRC.PostReplyCommentMiddleWrap>
        <PRC.PostReplyCommentBottomWrap>
          <PRC.PostReplyCommentCommentWrap onClick={() => setFold(!fold)}>
            <img src={commentIcon} alt="comment" />
            {commentData.commentOfComment?.length || "0"}
          </PRC.PostReplyCommentCommentWrap>
        </PRC.PostReplyCommentBottomWrap>
      </PRC.PostReplyCommentBox>
      {!fold && (
        <>
          <PostReplyCommentOfComment
            commentOfComment={commentData.commentOfComment}
            id={id}
          />
          <PRC.PostReplyCommentLine />
        </>
      )}
    </>
  );
};

export default PostReplyComment;
