import React from "react";
import { useNavigate } from "react-router";
import SubmitButton from "../../Common/Button/SubmitButton";
import * as SS from "./SignupSuccess.style";

const SignupSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SS.SignupSuccessBox>
      <SS.SingupSuccessIconCircle>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <path
            width="150"
            data-name="layer1"
            fill="white"
            stroke-miterlimit="10"
            stroke-width="0"
            d="M46 18L25 38l-9-9-4 4 13 13 26-24-4-4z"
          ></path>
        </svg>
      </SS.SingupSuccessIconCircle>
      <SS.SignupSuccessText>회원가입이 완료되었습니다.</SS.SignupSuccessText>
      <SS.SignupSuccessButtonWrap>
        <SubmitButton
          big
          text={"로그인 하기"}
          blue
          handleClick={() => {
            navigate("/login");
          }}
        />
      </SS.SignupSuccessButtonWrap>
    </SS.SignupSuccessBox>
  );
};

export default SignupSuccess;
