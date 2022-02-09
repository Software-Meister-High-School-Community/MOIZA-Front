import { ICommnet } from "../../../../../interface/Post/Post.type";
import ImgSplit from "../../../../Common/ImgSplit";
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
      <PostReplyCOCFormText
        withPicture={commentOfComment?.picture?.length !== 0}
      >
        {commentOfComment?.text}
      </PostReplyCOCFormText>
      {commentOfComment?.picture.length !== 0 && (
        <ImgSplit imgs={commentOfComment.picture} width={188} gap={5} />
      )}
    </PostReplyCOCFormWrap>
  );
};

export default PostReplyCOCForm;
