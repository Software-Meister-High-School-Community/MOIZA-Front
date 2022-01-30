import * as S from "./style";
import StarPost from "./StarPost";
import { StarPostCount } from "../constants";

const StarMenu: React.FC = () => {
  const StarMenuList = StarPostCount.map((menu, index) => {
    return (
      <div>
        <StarPost menu={menu} />
      </div>
    );
  });
  return (
    <S.Wrapper>
      <div>
        <S.StarName width="220px" height="35px" margin="0 542px 21px 0">
          일일 인기게시물
        </S.StarName>
        <S.HR width="760px" height="3px" background="#99B6FF" />
        <S.PostList>{StarMenuList}</S.PostList>
      </div>
    </S.Wrapper>
  );
};

export default StarMenu;
