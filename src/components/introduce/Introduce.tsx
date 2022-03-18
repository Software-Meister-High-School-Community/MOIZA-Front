import React, { FC } from "react";
import SubmitButton from "../Common/Button/SubmitButton";
import Puzzle from "../../assets/img/introduce/puzzle.svg";
import DownArrow from "../../assets/img/introduce/downArrow.svg";
import LOGO from "../../assets/img/MOIZALogo/koreanHorizontalType.svg";
import { Content } from "./constants";
import * as S from "./style";

const Introduce: FC = () => {
  return (
    <>
      <S.Wrapper>
        <S.firstPage>
          <S.firstTitleDiv>
            <h3>모이자를 소개해요</h3>
            <p>
              모이자는 소프트웨어 마이스터 고등학교 간의 교류를 활발히
              하기위해학생들이 직접 기획하고 만들게 되었어요. <br />더 넓은
              곳에서 활동하고싶다면? 모이자에 모여봐!
            </p>
          </S.firstTitleDiv>
          <S.BtnDiv>
            <SubmitButton
              big
              text={"바로 가입하기"}
              yellow
              handleClick={() => {}}
            />
            <SubmitButton big text={"로그인하기"} handleClick={() => {}} />
          </S.BtnDiv>
          <S.arrowDiv>
            <img src={DownArrow} alt="arrow" />
          </S.arrowDiv>
        </S.firstPage>
        <S.SecondPage>
          <S.SecondTitle>
            <h3>모이자 Q&A</h3>
          </S.SecondTitle>
          {Content.map((item, index) => (
            <>
              <S.QuestionDiv>
                <S.QuestionTitle key={index}>
                  <h6>{item.id}</h6>
                  <p>{item.title}</p>
                </S.QuestionTitle>
                <hr />
                <p>{item.content}</p>
              </S.QuestionDiv>
            </>
          ))}
        </S.SecondPage>
      </S.Wrapper>
      <S.puzzleImg src={Puzzle} alt="puzzle" />
      <S.FooterDiv>
        <p>
          모이자는 후에 더 알찬 서비스를 위해서 발전을 거듭하여 찾아올
          예정이에요
          <br /> 여러분의 많은 의견과 관심 부탁드립니다
        </p>
        <img src={LOGO} alt="logo" />
      </S.FooterDiv>
    </>
  );
};

export default Introduce;
