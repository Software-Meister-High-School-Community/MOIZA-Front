import * as S from "./style";
import GwangjuImg from "../../../../assets/img/banner/광주.jpg";

const Gwangju = () => {
  return (
    <S.Wrapper>
      <S.Gwangju style={{ backgroundImage: `url(${GwangjuImg})` }}>
        <S.SchoolName>광주 소프트웨어 마이스터고</S.SchoolName>
        <S.SchoolText>
          창의 융합력을 갖춘 글로벌 소프트웨어 마이스터 육성
        </S.SchoolText>
        <S.Hr />
        <S.SchoolClass1>소프트웨어개발과</S.SchoolClass1>
        <S.SchoolClass2>스마트IOT과</S.SchoolClass2>
        <S.SchoolHomePage
          onClick={() => window.open("http://gsm.gen.hs.kr/main/main.php")}
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Gwangju>
    </S.Wrapper>
  );
};

export default Gwangju;
