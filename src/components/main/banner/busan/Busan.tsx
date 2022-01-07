import * as S from "./style";
import BusanImg from "../../../../assets/img/banner/부산.jpg";

const Busan = () => {
  return (
    <S.Wrapper>
      <S.Busan style={{ backgroundImage: `url(${BusanImg})` }}>
        <S.SchoolName>부산 소프트웨어 마이스터고</S.SchoolName>
        <S.SchoolText>꿈을 향한 도전, 미래를 여는 학교</S.SchoolText>
        <S.Hr />
        <S.SchoolClass1>소프트웨어개발과</S.SchoolClass1>
        <S.SchoolClass2>임베디드소프트웨어과</S.SchoolClass2>
        <S.SchoolHomePage
          onClick={() =>
            window.open("https://school.busanedu.net/bssm-h/main.do")
          }
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Busan>
    </S.Wrapper>
  );
};

export default Busan;
