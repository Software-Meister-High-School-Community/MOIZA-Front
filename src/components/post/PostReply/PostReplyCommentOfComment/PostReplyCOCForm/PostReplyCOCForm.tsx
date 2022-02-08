import { ICommnet } from "../../../../../interface/Post/Post.type";
import ImgSplit from "../../../ImgSplit";
import {
  PostReplyCOCFormBreakPoint,
  PostReplyCOCFormHeaderDate,
  PostReplyCOCFormHeaderText,
  PostReplyCOCFormHeaderWrap,
  PostReplyCOCFormText,
  PostReplyCOCFormWrap,
} from "./PostReplyCOCForm.style";

interface IPostReplyCOCFormProps {
  commentOfComment: ICommnet;
}

const PostReplyCOCForm: React.FC<IPostReplyCOCFormProps> = ({
  commentOfComment,
}) => {
  return (
    <PostReplyCOCFormWrap>
      <PostReplyCOCFormHeaderWrap>
        <PostReplyCOCFormHeaderText>
          <span>
            <strong>{commentOfComment.name}</strong>
          </span>
          <PostReplyCOCFormBreakPoint />
          <span>{commentOfComment.school}</span>
          <PostReplyCOCFormBreakPoint />
          <span>{commentOfComment.studentState}</span>
        </PostReplyCOCFormHeaderText>
        <PostReplyCOCFormHeaderDate>
          {commentOfComment.createDate}
        </PostReplyCOCFormHeaderDate>
      </PostReplyCOCFormHeaderWrap>
      <PostReplyCOCFormText>{commentOfComment?.text}</PostReplyCOCFormText>
      {commentOfComment?.picture && (
        <ImgSplit imgs={commentOfComment.picture} width={188} gap={5} />
      )}
    </PostReplyCOCFormWrap>
  );
};

export default PostReplyCOCForm;
