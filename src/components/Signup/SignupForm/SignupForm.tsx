import { useState } from "react";
import { useRecoilState } from "recoil";
import { registerSchoolSelect } from "../../../store/Signup/registerInfoAtom";
import OptionButton from "../../Common/Select/OptionButton";
import RadioButton from "../../Common/Select/RadioButton";
import {
  SignupFormBirthTitle,
  SignupFormBirthTitleWrap,
  SignupFormBox,
  SignupFormFlexWrap,
  SignupFormGuideBirthRule,
  SignupFormRadioButtonText,
  SignupFormRadioButtonWrap,
  SignupFormSchoolButton,
  SignupFormSchoolWrap,
  SignupFormTextInput,
  SignupFormTitle,
} from "./SignupForm.style";

const SignupForm: React.FC = () => {
  const [isCheck1, setIsCheck1] = useState(false);
  const [isCheck2, setIsCheck2] = useState(false);
  const [isCheck3, setIsCheck3] = useState(false);
  const [isCheck4, setIsCheck4] = useState(false);

  const [schoolSelect, setSchoolSelect] = useRecoilState(registerSchoolSelect);

  const schoolList = [
    "광주소프트웨어마이스터고등학교",
    "대구소프트웨어마이스터고등학교",
    "대덕소프트웨어마이스터고등학교",
    "미림마이스터고등학교",
    "부산소프트웨어마이스터고등학교",
  ];

  return (
    <SignupFormBox>
      <SignupFormTitle marginBottom={36}>구분</SignupFormTitle>
      <SignupFormFlexWrap>
        <SignupFormRadioButtonWrap>
          <RadioButton isSelected={isCheck1} onClick={setIsCheck1} />
          <SignupFormRadioButtonText>재학생</SignupFormRadioButtonText>
        </SignupFormRadioButtonWrap>
        <SignupFormRadioButtonWrap marginLeft={251}>
          <RadioButton isSelected={isCheck2} onClick={setIsCheck2} />
          <SignupFormRadioButtonText>졸업생</SignupFormRadioButtonText>
        </SignupFormRadioButtonWrap>
      </SignupFormFlexWrap>
      <SignupFormTitle marginBottom={13}>이름</SignupFormTitle>
      <SignupFormTextInput width={250} />
      <SignupFormBirthTitleWrap>
        <SignupFormBirthTitle>생년월일</SignupFormBirthTitle>
        <SignupFormGuideBirthRule>ex) 20050624</SignupFormGuideBirthRule>
      </SignupFormBirthTitleWrap>
      <SignupFormTextInput width={250} />
      <SignupFormTitle marginBottom={36}>성별</SignupFormTitle>
      <SignupFormFlexWrap>
        <SignupFormRadioButtonWrap>
          <RadioButton isSelected={isCheck3} onClick={setIsCheck3} />
          <SignupFormRadioButtonText>남성</SignupFormRadioButtonText>
        </SignupFormRadioButtonWrap>
        <SignupFormRadioButtonWrap marginLeft={265}>
          <RadioButton isSelected={isCheck4} onClick={setIsCheck4} />
          <SignupFormRadioButtonText>여성</SignupFormRadioButtonText>
        </SignupFormRadioButtonWrap>
      </SignupFormFlexWrap>
      <SignupFormTitle marginBottom={13}>학교선택</SignupFormTitle>
      <SignupFormSchoolWrap>
        {schoolList.map((item) => {
          return (
            <SignupFormSchoolButton name={item}>
              <OptionButton
                isSelected={schoolSelect === item}
                text={item}
                onClick={setSchoolSelect}
              />
            </SignupFormSchoolButton>
          );
        })}
      </SignupFormSchoolWrap>
    </SignupFormBox>
  );
};

export default SignupForm;
