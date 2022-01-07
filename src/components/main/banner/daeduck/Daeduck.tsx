import * as S from "./style";
import DaeduckImg from "../../../../assets/img/banner/대덕.jpg";

const Daeduck = () => {
  return (
    <S.Wrapper>
      <S.Daeduck style={{ backgroundImage: `url(${DaeduckImg})` }}>
        <S.SchoolName>대덕 소프트웨어 마이스터고</S.SchoolName>
        <S.SchoolText>
          창의성과 인간미를 품은 소프트웨어 영재의 육성
        </S.SchoolText>
        <S.Hr />
        <S.SchoolClass1>소프트웨어개발과</S.SchoolClass1>
        <S.SchoolClass2>임베디드소프트웨어과</S.SchoolClass2>
        <S.SchoolClass3>정보보안과</S.SchoolClass3>
        <S.SchoolHomePage
          onClick={() => window.open("https://dsmhs.djsch.kr/main.do")}
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Daeduck>
    </S.Wrapper>
  );
};

export default Daeduck;
