import * as S from "./style";
import DaeduckImg from "../../../assets/img/banner/대덕.jpg";

const Daeduck = () => {
  return (
    <S.Wrapper>
      <S.Banner style={{ backgroundImage: `url(${DaeduckImg})` }}>
        <S.SchoolName style={{ margin: "92px 307px 21px 81px" }}>
          대덕 소프트웨어 마이스터고
        </S.SchoolName>
        <S.SchoolText
          style={{ width: "400px", height: "22px", margin: "0 60px 70px 82px" }}
        >
          창의성과 인간미를 품은 소프트웨어 영재의 육성
        </S.SchoolText>
        <S.Hr />
        <S.SchoolClass1
          style={{
            width: "128px",
            height: "20px",
            margin: "0 619px 13px 79px",
          }}
        >
          소프트웨어개발과
        </S.SchoolClass1>
        <S.SchoolClass2
          style={{
            width: "160px",
            height: "20px",
            margin: "0 619px 13px 79px",
          }}
        >
          임베디드소프트웨어과
        </S.SchoolClass2>
        <S.SchoolClass3
          style={{
            width: "180px",
            height: "20px",
            margin: "0 619px 83px 79px",
          }}
        >
          정보보안과
        </S.SchoolClass3>
        <S.SchoolHomePage
          onClick={() => window.open("https://dsmhs.djsch.kr/main.do")}
          style={{ width: "140px", margin: "0 623px 0 82px" }}
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Banner>
    </S.Wrapper>
  );
};

export default Daeduck;
