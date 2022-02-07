import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Path from "../../Common/path";
import { PostListPathArr } from "../constants";
import {
  PostReplyHeaderWrap,
  PostReplyBox,
  PostReplyWrap,
  PostReplyIconCircle,
  PostReplyInfoWrap,
  PostReplyTitle,
  PostReplyWriterWrap,
  PostReplyProfileCircle,
  PostReplyWriterInfoText,
  PostReplyWriterInfoTextWrap,
  PostReplyWriterBreakPoint,
  PostReplyDateInfoWrap,
  PostReplyMenuButton,
  PostReplyMiddleWrap,
  PostReplyContentText,
  PostReplyBottomWrap,
  PostReplyBottomLikeWrap,
  PostReplyBottomViewWrap,
  PostReplyLine,
  PostReplyCommentTitleWrap,
} from "./PostReply.style";
import menuCircle from "../../../assets/img/post/menuCircle.svg";
import heart from "../../../assets/img/admin/icons/heart.svg";
import view from "../../../assets/img/admin/icons/view.svg";
import SubmitButton from "../../Common/Button/SubmitButton";
import { IPostReplyDataProps } from "../../../interface/Post/Post.type";
import PostReplyComment from "./PostReplyComment";
import ImgSplit from "../ImgSplit";

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
    picture: [1, 2, 3, 4],
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
            picture: [heart],
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
        picture: [heart, view],
      },
      {
        id: 1113,
        text: "사진 3장",
        name: "짱정원",
        school: "미림마이스터고",
        studentState: "재학생",
        createDate: "22/01/21  8:29",
        profileImg: "ㄴㅁㅇㄴㅁㅇ",
        picture: [heart, view, heart],
      },
      {
        id: 1114,
        text: "사진 4장",
        name: "짱정원",
        school: "미림마이스터고",
        studentState: "재학생",
        createDate: "22/01/21  8:29",
        profileImg: "ㄴㅁㅇㄴㅁㅇ",
        picture: [heart, view, heart, view],
      },
    ],
  };

  const [postData, setPostData] = useState<IPostReplyDataProps>();
  const [isLoading, setIsLoading] = useState(true);

  const { postid } = useParams();

  useEffect(() => {
    console.log(postid);
    setPostData(exampleData);
    setIsLoading(false);
  }, [setPostData, setIsLoading]);

  return (
    <PostReplyBox>
      {isLoading ? (
        "로딩중..."
      ) : (
        <>
          {postData && (
            <>
              <Path pathArray={PostListPathArr} />
              <PostReplyWrap>
                <PostReplyHeaderWrap>
                  <PostReplyIconCircle />
                  <PostReplyInfoWrap>
                    <PostReplyTitle>{postData.title}</PostReplyTitle>
                    <PostReplyWriterWrap>
                      <PostReplyProfileCircle />
                      <PostReplyWriterInfoTextWrap>
                        <PostReplyWriterInfoText>
                          <strong>{postData.writer}</strong>
                        </PostReplyWriterInfoText>
                        <PostReplyWriterBreakPoint />
                        <PostReplyWriterInfoText>
                          {postData.school}
                        </PostReplyWriterInfoText>
                        <PostReplyWriterBreakPoint />
                        <PostReplyWriterInfoText>
                          {postData.studentState}
                        </PostReplyWriterInfoText>
                      </PostReplyWriterInfoTextWrap>
                      <PostReplyDateInfoWrap>
                        <p>작성일 {postData.createDate}</p>
                        <p>마지막 수정일 {postData.createDate}</p>
                      </PostReplyDateInfoWrap>
                      <PostReplyMenuButton>
                        <img src={menuCircle} alt="menu" />
                      </PostReplyMenuButton>
                    </PostReplyWriterWrap>
                  </PostReplyInfoWrap>
                </PostReplyHeaderWrap>
                <PostReplyMiddleWrap>
                  <PostReplyContentText
                    withPicture={postData.picture.length ? true : false}
                  >
                    {postData.text}
                  </PostReplyContentText>
                  <ImgSplit width={780} imgs={postData.picture} gap={20} />
                </PostReplyMiddleWrap>
                <PostReplyBottomWrap>
                  <PostReplyBottomLikeWrap>
                    <img src={heart} alt="heart" />
                    <p>{postData.likes}</p>
                  </PostReplyBottomLikeWrap>
                  <PostReplyBottomViewWrap>
                    <img src={view} alt="view" />
                    <p>{postData.views}</p>
                  </PostReplyBottomViewWrap>
                </PostReplyBottomWrap>
                {postData?.comment?.length ? (
                  <>
                    <PostReplyLine />
                    <PostReplyCommentTitleWrap>
                      <p>
                        답글 <strong>{postData.comment.length}</strong>
                      </p>
                      <SubmitButton text="답글 추가" big blue />
                    </PostReplyCommentTitleWrap>
                    {postData?.comment.map((item) => {
                      return (
                        <PostReplyComment commentData={item} key={item.id} />
                      );
                    })}
                  </>
                ) : null}
              </PostReplyWrap>
            </>
          )}
        </>
      )}
    </PostReplyBox>
  );
};

export default PostReply;
