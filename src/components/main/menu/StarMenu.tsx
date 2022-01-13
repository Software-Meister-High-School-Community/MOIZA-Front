import * as S from "./style";
import StarPost from "./StarPost";

const StarMenu: React.FC = () => {
  const PostCount = [
    "3줄넣기세줄넣기 세줄넣기 세줄넣기 3줄 인기게시물 제목은 3줄 세줄을넣자 두 줄말고 세줄을 넣자",
    "오늘의 할 일 멋지게 자기 내일의 할 일 모이자 들어가기",
    "오늘의 할 일 멋지게 자기 내일의 할 일 모이자 들어가기",
    "모이자를 만나고 내 인생이 달라졌다~",
    "오늘의 할 일 멋지게 자기 내일의 할 일 모이자 들어가기",
    "오늘의 할 일 멋지게 자기 내일의 할 일 모이자 들어가기",
    "오늘의 할 일 멋지게 자기 내일의 할 일 모이자 들어가기",
    "3줄넣기세줄넣기 세줄넣기 세줄넣기 3줄 인기게시물 제목은 3줄 세줄을 넣자 두 줄말고 세줄을 넣자",
    "제목은 이런식으로",
    "3줄넣기세줄넣기 세줄넣기 세줄넣기 3줄 인기게시물 제목은 3줄 세줄을 넣자 두 줄말고 세줄을 넣자",
  ];

  const menuList = PostCount.map((menu, index) => {
    return (
      <>
        <StarPost menu={menu} />
      </>
    );
  });

  return (
    <S.Wrapper>
      <div>
        <S.StarName width="220px" height="35px" margin="0 542px 21px 0">
          일일 인기게시물
        </S.StarName>
        <S.HR width="760px" height="3px" background="#99B6FF" />
        <S.PostList>{menuList}</S.PostList>
      </div>
    </S.Wrapper>
  );
};

export default StarMenu;
