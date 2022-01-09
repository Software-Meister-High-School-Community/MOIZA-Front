import * as S from "./style";
import BusanImg from "../../../assets/img/banner/부산.svg";

const Busan: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Banner style={{ backgroundImage: `url(${BusanImg})` }}>
        <S.SchoolName width="510px" height="47px" margin="92px 0 21px 82px">
          부산 소프트웨어 마이스터고
        </S.SchoolName>
        <S.SchoolText width="278px" height="22px" margin="92px 0 21px 82px">
          꿈을 향한 도전, 미래를 여는 학교
        </S.SchoolText>
        <S.Hr margin="0 0 21px 82px" />
        <S.SchoolClass1 width="160px" height="20px" margin="0 619px 13px 82px">
          소프트웨어개발과
        </S.SchoolClass1>
        <S.SchoolClass2 width="160px" height="20px" margin="0 619px 109px 82px">
          임베디드소프트웨어과
        </S.SchoolClass2>
        <S.SchoolHomePage
          onClick={() =>
            window.open("https://school.busanedu.net/bssm-h/main.do")
          }
          width="140px"
          margin="0 623px 0 82px"
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Banner>
    </S.Wrapper>
  );
};

export default Busan;
