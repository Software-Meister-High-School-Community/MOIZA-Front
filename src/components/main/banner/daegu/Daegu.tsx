import * as S from "./style";
import DaeguImg from "../../../../assets/img/banner/대구.jpg";

const Daegu = () => {
  return (
    <S.Wrapper>
      <S.Daegu style={{ backgroundImage: `url(${DaeguImg})` }}>
        <S.SchoolName>대구 소프트웨어 마이스터고</S.SchoolName>
        <S.SchoolText>
          더 나은 세상을 만들어 갈 sw인재가 모이는 대구소프트웨어고등학교
        </S.SchoolText>
        <S.Hr />
        <S.SchoolClass1>소프트웨어개발과</S.SchoolClass1>
        <S.SchoolClass2>임베디드소프트웨어과</S.SchoolClass2>
        <S.SchoolClass3>인공지능 소프트웨어과</S.SchoolClass3>
        <S.SchoolHomePage
          onClick={() => window.open("http://www.dgsw.hs.kr/index.do")}
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Daegu>
    </S.Wrapper>
  );
};

export default Daegu;
