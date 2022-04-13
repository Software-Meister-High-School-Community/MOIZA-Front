import * as UR from "./UserResult.style";
// import Slider from "react-slick";
import onPrevImg from "../../../assets/img/common/prevBtnIcon.svg";
import onNextImg from "../../../assets/img/common/nextBtnIcon.svg";
import useUserResult from "../../../hooks/result/userResult/useUserResult";
const UserResult = () => {
  const { slider, users, sliderSettings, handleNext, handlePrevious } =
    useUserResult();
  return (
    <UR.Wrapper>
      {users.length > 6 && (
        <UR.ButtonBox>
          <UR.prevButton
            src={onPrevImg}
            onClick={handlePrevious}
            alt="prevBtn 이미지"
          />
          <UR.NextButton
            src={onNextImg}
            onClick={handleNext}
            alt="nextBtn 이미지"
          />
        </UR.ButtonBox>
      )}
      <UR.Title>유저</UR.Title>
      <UR.Container ref={slider} {...sliderSettings}>
        {users.map(({ name }) => {
          return (
            <>
              <UR.ItemBox>
                <UR.Img />
                <UR.StudentType>재학생</UR.StudentType>
                <UR.Name>{name}</UR.Name>
                <UR.SchoolName>미림마이스터고</UR.SchoolName>
              </UR.ItemBox>
            </>
          );
        })}
      </UR.Container>
    </UR.Wrapper>
  );
};

export default UserResult;
