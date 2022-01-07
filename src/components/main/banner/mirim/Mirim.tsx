import * as S from "./style";
import MirimImg from "../../../../assets/img/banner/미림.jpg";

const Mirim = () => {
  return (
    <S.Wrapper>
      <S.Mirim style={{ backgroundImage: `url(${MirimImg})` }}>
        <S.SchoolName>미림 마이스터고</S.SchoolName>
        <S.SchoolText>
          IT 시대의 꿈과 희망이 있는 곳. 미림에서 열어갑니다.
        </S.SchoolText>
        <S.Hr />
        <S.SchoolClass1>뉴미디어소프트웨어과</S.SchoolClass1>
        <S.SchoolClass2>뉴미디어웹솔루션과</S.SchoolClass2>
        <S.SchoolClass3>뉴미디어디자인과</S.SchoolClass3>
        <S.SchoolHomePage
          onClick={() => window.open("https://www.e-mirim.hs.kr/main.do")}
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Mirim>
    </S.Wrapper>
  );
};

export default Mirim;
