import * as S from "./style";
import DaeguImg from "../../../assets/img/banner/대구.svg";

const Daegu: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Banner style={{ backgroundImage: `url(${DaeguImg})` }}>
        <S.SchoolName width="510px" height="47px" margin="92px 311px 21px 77px">
          대구 소프트웨어 마이스터고
        </S.SchoolName>
        <S.SchoolText width="560px" height="22px" margin="0 69px 70px 77px">
          더 나은 세상을 만들어 갈 sw인재가 모이는 대구소프트웨어고등학교
        </S.SchoolText>
        <S.Hr margin="0 0 21px 82px" />
        <S.SchoolClass1 width="128px" height="20px" margin="0 619px 10px 79px">
          소프트웨어개발과
        </S.SchoolClass1>
        <S.SchoolClass2 width="160px" height="20px" margin="0 619px 10px 79px">
          임베디드소프트웨어과
        </S.SchoolClass2>
        <S.SchoolClass3 width="180px" height="20px" margin="0 619px 105px 79px">
          인공지능 소프트웨어과
        </S.SchoolClass3>
        <S.SchoolHomePage
          onClick={() => window.open("http://www.dgsw.hs.kr/index.do")}
          width="140px"
          margin="0 623px 0 82px"
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Banner>
    </S.Wrapper>
  );
};

export default Daegu;
