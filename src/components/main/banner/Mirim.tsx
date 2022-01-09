import * as S from "./style";
import MirimImg from "../../../assets/img/banner/미림.jpg";

const Mirim = () => {
  return (
    <S.Wrapper>
      <S.Banner style={{ backgroundImage: `url(${MirimImg})` }}>
        <S.SchoolName
          style={{ width: "300px", height: "47px", margin: "92px 0 21px 82px" }}
        >
          미림 마이스터고
        </S.SchoolName>
        <S.SchoolText
          style={{ width: "430px", height: "22px", margin: "0 69px 70px 82px" }}
        >
          IT 시대의 꿈과 희망이 있는 곳. 미림에서 열어갑니다.
        </S.SchoolText>
        <S.Hr />
        <S.SchoolClass1
          style={{
            width: "160px",
            height: "20px",
            margin: "0 619px 13px 79px",
          }}
        >
          뉴미디어소프트웨어과
        </S.SchoolClass1>
        <S.SchoolClass2
          style={{
            width: "160px",
            height: "20px",
            margin: "0 619px 13px 79px",
          }}
        >
          뉴미디어웹솔루션과
        </S.SchoolClass2>
        <S.SchoolClass3
          style={{
            width: "180px",
            height: "20px",
            margin: "0 619px 65px 79px",
          }}
        >
          뉴미디어디자인과
        </S.SchoolClass3>
        <S.SchoolHomePage
          onClick={() => window.open("https://www.e-mirim.hs.kr/main.do")}
          style={{ width: "140px", margin: "0 623px 0 79px" }}
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Banner>
    </S.Wrapper>
  );
};

export default Mirim;
