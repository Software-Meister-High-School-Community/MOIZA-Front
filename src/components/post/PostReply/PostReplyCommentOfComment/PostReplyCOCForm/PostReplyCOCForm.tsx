import { ICommnet } from "../../../../../interface/Post/Post.type";
import ImgSplit from "../../../../Common/ImgSplit";
import * as PRCOCF from "./PostReplyCOCForm.style";
import SeeMoreModal from "../../../../Common/seeMoreModal";
import menuCircle from "../../../../../assets/img/common/seeMoreBtnIcon.svg";
import { seeMoreOption } from "../../../constants";
import { useState } from "react";

interface IPostReplyCOCFormProps {
  commentOfComment: ICommnet;
}

const PostReplyCOCForm: React.FC<IPostReplyCOCFormProps> = ({
  commentOfComment,
}) => {
  const [seeMoreModalStatus, setSeeMoreModalStatus] = useState<boolean>(false);

  return (
    <PRCOCF.PostReplyCOCFormWrap>
      <PRCOCF.PostReplyCOCFormHeaderWrap>
        <PRCOCF.PostReplyCOCFormHeaderText>
          <span>
            <strong>{commentOfComment.name}</strong>
          </span>
          <PRCOCF.PostReplyCOCFormBreakPoint />
          <span>{commentOfComment.school}</span>
          <PRCOCF.PostReplyCOCFormBreakPoint />
          <span>{commentOfComment.studentState}</span>
        </PRCOCF.PostReplyCOCFormHeaderText>
        <PRCOCF.miniWrap>
          <PRCOCF.PostReplyCOCFormHeaderDate>
            {commentOfComment.createDate}
          </PRCOCF.PostReplyCOCFormHeaderDate>
          <PRCOCF.PostReplyMenuButton
            onClick={() => setSeeMoreModalStatus(true)}
          >
            <img src={menuCircle} alt="menu" />
            {seeMoreModalStatus && (
              <SeeMoreModal
                optionList={seeMoreOption}
                setModalStatus={setSeeMoreModalStatus}
              />
            )}
          </PRCOCF.PostReplyMenuButton>
        </PRCOCF.miniWrap>
      </PRCOCF.PostReplyCOCFormHeaderWrap>
      <PRCOCF.PostReplyCOCFormText
        withPicture={commentOfComment?.picture?.length !== 0}
      >
        {commentOfComment?.text}
      </PRCOCF.PostReplyCOCFormText>
      {commentOfComment?.picture.length !== 0 && (
        <ImgSplit imgs={commentOfComment.picture} width={188} gap={5} />
      )}
    </PRCOCF.PostReplyCOCFormWrap>
  );
};

export default PostReplyCOCForm;
