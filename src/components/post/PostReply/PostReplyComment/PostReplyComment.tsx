import { ICommnet } from "../../../../interface/Post/Post.type";
import * as PRC from "./PostReplyComment.style";
import menuCircle from "../../../../assets/img/common/seeMoreBtnIcon.svg";
import commentIcon from "../../../../assets/img/common/comment.svg";
import ImgSplit from "../../../Common/ImgSplit";
import { useState } from "react";
import PostReplyCommentOfComment from "../PostReplyCommentOfComment";
import { seeMoreOption } from "../../constants/index";
import SeeMoreModal from "../../../Common/seeMoreModal";
import FixPin from "../../../../assets/img/post/Pin.svg";

interface IPostReplyCommentProps {
  commentData: ICommnet;
  id: number;
}

const PostReplyComment: React.FC<IPostReplyCommentProps> = ({
  commentData,
  id,
}) => {
  const [fold, setFold] = useState(true);
  const [seeMoreModalStatus, setSeeMoreModalStatus] = useState(false);
  const [fixState, setFixState] = useState(true);
  const [writerState, setWriterState] = useState(true);

  return (
    <>
      {fixState ? (
        <PRC.Fix>
          <img src={FixPin} alt="" />
          <p>작성자님이 고정한 댓글</p>
        </PRC.Fix>
      ) : (
        ""
      )}
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
            {writerState ? (
              <PRC.WriterProof>
                <p>작성자</p>
              </PRC.WriterProof>
            ) : (
              ""
            )}
          </PRC.PostReplyCommentWriterWrap>
          <PRC.PostReplyCommentDate>
            {commentData.createDate}
          </PRC.PostReplyCommentDate>
          <PRC.PostReplyCommentMenuButton
            onClick={() => setSeeMoreModalStatus(true)}
          >
            <img src={menuCircle} alt="menu" />
            {seeMoreModalStatus && (
              <SeeMoreModal
                optionList={seeMoreOption}
                setModalStatus={setSeeMoreModalStatus}
              />
            )}
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
