import * as S from "./style";
import GwangjuImg from "../../../assets/img/banner/광주.jpg";

const Gwangju = () => {
  return (
    <S.Wrapper>
      <S.Banner style={{ backgroundImage: `url(${GwangjuImg})` }}>
        <S.SchoolName
          style={{
            width: "510px",
            height: "47px",
            margin: "92px 68px 21px 300px",
          }}
        >
          광주 소프트웨어 마이스터고
        </S.SchoolName>
        <S.SchoolText
          style={{
            width: "485px",
            height: "22px",
            margin: "0 69px 70px 320px",
          }}
        >
          창의 융합력을 갖춘 글로벌 소프트웨어 마이스터 육성
        </S.SchoolText>
        <S.Hr />
        <S.SchoolClass1
          style={{
            width: "128px",
            height: "20px",
            margin: "0 70px 13px 654px",
          }}
        >
          소프트웨어개발과
        </S.SchoolClass1>
        <S.SchoolClass2
          style={{
            width: "89px",
            height: "20px",
            margin: "0 68px 105px 694px",
          }}
        >
          스마트IOT과
        </S.SchoolClass2>
        <S.SchoolHomePage
          onClick={() => window.open("http://gsm.gen.hs.kr/main/main.php")}
          style={{ width: "140px", margin: "0 0 0 650px" }}
        >
          홈페이지 바로가기
        </S.SchoolHomePage>
      </S.Banner>
    </S.Wrapper>
  );
};

export default Gwangju;
