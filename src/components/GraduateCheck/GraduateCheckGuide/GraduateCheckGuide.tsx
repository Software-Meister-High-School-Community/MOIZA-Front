import * as GCG from "./GraduateCheckGuide.style";
import * as CONST from "../ConsTant/index";
import { GraduateCheckFooterWrap } from "../GraduateCheck.style";
import SubmitButton from "../../Common/Button/SubmitButton";
import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router";
import bechelorCap from "../../../assets/img/graduateCheck/bechelorCap.svg";

interface IGraduateCheckGuideProps {
  setPart: Dispatch<SetStateAction<string>>;
}

const GraduateCheckGuide: React.FC<IGraduateCheckGuideProps> = ({
  setPart,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <GCG.GraduateCheckGuideBox>
        <GCG.GraduateCheckGuidebachelorCapImg src={bechelorCap} />
        <GCG.GraduateCheckGuideTitle style={{ marginBottom: 16 }}>
          졸업생 인증을 하는 이유
        </GCG.GraduateCheckGuideTitle>
        <GCG.GraduateCheckGuideExplain style={{ marginBottom: 60 }}>
          원활한 서비스 운영을 위하여 외부인의 사이트 이용을 제한하는 졸업생
          인증 절차를 거치고 있습니다. 졸업생 가입자분들의 너른 양해
          부탁드립니다.
        </GCG.GraduateCheckGuideExplain>
        <GCG.GraduateCheckGuideTitle style={{ marginBottom: 33 }}>
          졸업생 인증을 하지 않으실 경우 아래의 서비스 이용이 어렵습니다.
        </GCG.GraduateCheckGuideTitle>
        <GCG.GraduateCheckGuideLimitList style={{ marginBottom: 64 }}>
          {CONST.GraduateCheckLimitList.map((limit) => {
            return <li key={limit.id}>- {limit.content}</li>;
          })}
        </GCG.GraduateCheckGuideLimitList>
        <GCG.GraduateCheckGuideExplain style={{ marginBottom: 7 }}>
          * 지금 인증을 하지 않으셔도, 추후 마이페이지 &gt; 프로필 편집에서
          졸업생 인증이 가능합니다.
        </GCG.GraduateCheckGuideExplain>
        <GCG.GraduateCheckGuideExplain>
          * 졸업생 인증 후에 승인이 완료되어야 서비스 이용이 가능합니다.
        </GCG.GraduateCheckGuideExplain>
      </GCG.GraduateCheckGuideBox>
      <GraduateCheckFooterWrap>
        <SubmitButton
          text="졸업생 인증하기"
          big
          blue
          handleClick={() => setPart("졸업 인증")}
        />
        <SubmitButton
          text="다음에 할래요"
          big
          handleClick={() => navigate("/")}
        />
      </GraduateCheckFooterWrap>
    </>
  );
};

export default GraduateCheckGuide;
