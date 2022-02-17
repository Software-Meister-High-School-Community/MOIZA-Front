import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Path from "../../Common/path";
import { PostListPathArr } from "../constants";
import * as PR from "./PostReply.style";
import menuCircle from "../../../assets/img/post/menuCircle.svg";
import heart from "../../../assets/img/admin/icons/heart.svg";
import view from "../../../assets/img/admin/icons/view.svg";
import questionCircle from "../../../assets/img/post/questionCircle.svg";
import SubmitButton from "../../Common/Button/SubmitButton";
import { IPostReplyDataProps } from "../../../interface/Post/Post.type";
import PostReplyComment from "./PostReplyComment";
import ImgSplit from "../../Common/ImgSplit";
import PostReplyMakeForm from "./PostReplyMakeForm";

const PostReply: React.FC = () => {
  const exampleData = {
    id: 1234,
    title: "이건 어떻게 하는 건가요?",
    prifileImg: "asdf",
    writer: "멩쓴쥬",
    school: "미림마이스터고",
    studentState: "재학생",
    createDate: "22/01/21  8:29",
    lastModifyDate: "22/01/27  13:53",
    text: "줄간격이 30입니다 무의미 텍스트입니다. 이름을 내일 묻힌 계십니다. 이름과, 소녀들의 계절이 가슴속에 북간도에 가득 걱정도 하나에 까닭입니다. 없이 내 추억과 지나고 있습니다. 된 아이들의 별을 강아지, 이름자를 버리었습니다. 릴케 쓸쓸함과 멀리 프랑시스 새겨지는 내 까닭입니다. 차 지나가는 같이 노루, 사랑과 위에도 책상을 패, 듯합니다. 헤일 아이들의 이런 버리었습니다. 애기 한 멀리 봅니다. 한 비둘기, 가슴속에 내 별 언덕 파란 이름과, 거외다.",
    picture: [
      heart,
      "data:image/png;base64,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",
      "data:image/png;base64,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",
    ],
    likes: 599,
    views: "1.2천",
    comment: [
      {
        id: 1111,
        text: "사진 1장",
        name: "멩쓴쥬",
        school: "미림마이스터고",
        studentState: "재학생",
        createDate: "22/01/21  8:29",
        profileImg: "ㄴㅁㅇㄴㅁㅇ",
        picture: [1],
        commentOfComment: [
          {
            id: 1111,
            text: "사진 1장",
            name: "멩쓴쥬",
            school: "미림마이스터고",
            studentState: "재학생",
            createDate: "22/01/21  8:29",
            profileImg: "ㄴㅁㅇㄴㅁㅇ",
            picture: [1],
          },
          {
            id: 1111,
            text: "사진 2장",
            name: "멩쓴쥬",
            school: "미림마이스터고",
            studentState: "재학생",
            createDate: "22/01/21  8:29",
            profileImg: "ㄴㅁㅇㄴㅁㅇ",
            picture: [1, 2],
          },
          {
            id: 1111,
            text: "사진 3장",
            name: "멩쓴쥬",
            school: "미림마이스터고",
            studentState: "재학생",
            createDate: "22/01/21  8:29",
            profileImg: "ㄴㅁㅇㄴㅁㅇ",
            picture: [1, 2, 3],
          },
        ],
      },
      {
        id: 1112,
        text: "사진 2장",
        name: "짱정원",
        school: "미림마이스터고",
        studentState: "재학생",
        createDate: "22/01/21  8:29",
        profileImg: "ㄴㅁㅇㄴㅁㅇ",
        picture: [1, 2],
      },
      {
        id: 1113,
        text: "사진 3장",
        name: "짱정원",
        school: "미림마이스터고",
        studentState: "재학생",
        createDate: "22/01/21  8:29",
        profileImg: "ㄴㅁㅇㄴㅁㅇ",
        picture: [1, 2, 3],
      },
      {
        id: 1114,
        text: "사진 4장",
        name: "짱정원",
        school: "미림마이스터고",
        studentState: "재학생",
        createDate: "22/01/21  8:29",
        profileImg: "ㄴㅁㅇㄴㅁㅇ",
        picture: [1, 2, 3, 4],
      },
    ],
  };

  const [postData, setPostData] = useState<IPostReplyDataProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [isMake, setMake] = useState(false);

  const { postid } = useParams();

  useEffect(() => {
    console.log(postid);
    setPostData(exampleData);
    setIsLoading(false);
  }, [setPostData, setIsLoading, postid]);

  return (
    <PR.PostReplyBox>
      {isLoading ? (
        "로딩중..."
      ) : (
        <>
          {postData && (
            <>
              <Path pathArray={PostListPathArr} />
              <PR.PostReplyWrap>
                <PR.PostReplyHeaderWrap>
                  <PR.PostReplyIconCircle src={questionCircle} />
                  <PR.PostReplyInfoWrap>
                    <PR.PostReplyTitle>{postData.title}</PR.PostReplyTitle>
                    <PR.PostReplyWriterWrap>
                      <PR.PostReplyProfileCircle />
                      <PR.PostReplyWriterInfoTextWrap>
                        <PR.PostReplyWriterInfoText>
                          <strong>{postData.writer}</strong>
                        </PR.PostReplyWriterInfoText>
                        <PR.PostReplyWriterBreakPoint />
                        <PR.PostReplyWriterInfoText>
                          {postData.school}
                        </PR.PostReplyWriterInfoText>
                        <PR.PostReplyWriterBreakPoint />
                        <PR.PostReplyWriterInfoText>
                          {postData.studentState}
                        </PR.PostReplyWriterInfoText>
                      </PR.PostReplyWriterInfoTextWrap>
                      <PR.PostReplyDateInfoWrap>
                        <pre>작성일 {postData.createDate}</pre>
                        <pre>마지막 수정일 {postData.createDate}</pre>
                      </PR.PostReplyDateInfoWrap>
                      <PR.PostReplyMenuButton>
                        <img src={menuCircle} alt="menu" />
                      </PR.PostReplyMenuButton>
                    </PR.PostReplyWriterWrap>
                  </PR.PostReplyInfoWrap>
                </PR.PostReplyHeaderWrap>
                <PR.PostReplyMiddleWrap>
                  <PR.PostReplyContentText
                    withPicture={postData.picture.length ? true : false}
                  >
                    {postData.text}
                  </PR.PostReplyContentText>
                  <ImgSplit width={780} imgs={postData.picture} gap={20} />
                </PR.PostReplyMiddleWrap>
                <PR.PostReplyBottomWrap>
                  <PR.PostReplyBottomLikeWrap>
                    <img src={heart} alt="heart" />
                    <p>{postData.likes}</p>
                  </PR.PostReplyBottomLikeWrap>
                  <PR.PostReplyBottomViewWrap>
                    <img src={view} alt="view" />
                    <p>{postData.views}</p>
                  </PR.PostReplyBottomViewWrap>
                </PR.PostReplyBottomWrap>
                <PR.PostReplyLine />
                {isMake ? (
                  <PostReplyMakeForm />
                ) : (
                  <PR.PostReplyCommentTitleWrap>
                    <p>
                      답글 <strong>{postData.comment.length}</strong>
                    </p>
                    {postData?.comment?.length !== 0 && (
                      <SubmitButton
                        text="답글 추가"
                        big
                        blue
                        handleClick={() => setMake(true)}
                      />
                    )}
                  </PR.PostReplyCommentTitleWrap>
                )}
                {postData?.comment?.length ? (
                  <>
                    {postData?.comment.map((item, idx) => {
                      return (
                        <PostReplyComment
                          commentData={item}
                          key={idx}
                          id={idx}
                        />
                      );
                    })}
                  </>
                ) : (
                  <PR.PostReplyNoCommentWrap>
                    <p>아직 답글이 없네요!</p>
                    <SubmitButton text="답글 추가" blue big />
                  </PR.PostReplyNoCommentWrap>
                )}
              </PR.PostReplyWrap>
            </>
          )}
        </>
      )}
    </PR.PostReplyBox>
  );
};

export default PostReply;
