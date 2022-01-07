import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { captureRejectionSymbol } from "stream";
import { isTemplateHead } from "typescript";
import { registerSchoolSelect } from "../../../store/Signup/registerInfoAtom";
import { schoolEmailTransform } from "../../../util/schoolEmailTransform";
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
  SignupFormSchoolMailText,
  SignupFormSchoolWrap,
  SignupFormSubmitButton,
  SignupFormTextInput,
  SignupFormTitle,
} from "./SignupForm.style";

const SignupForm: React.FC = () => {
  const [isCheck1, setIsCheck1] = useState(false);
  const [isCheck2, setIsCheck2] = useState(false);
  const [isCheck3, setIsCheck3] = useState(false);
  const [isCheck4, setIsCheck4] = useState(false);

  const [schoolSelect, setSchoolSelect] = useRecoilState(registerSchoolSelect);
  const [sexSelect, setSexSelect] = useState("남성");
  const [studentStatus, setStudentStatus] = useState("재학생");

  const schoolList = [
    "광주소프트웨어마이스터고등학교",
    "대구소프트웨어마이스터고등학교",
    "대덕소프트웨어마이스터고등학교",
    "미림마이스터고등학교",
    "부산소프트웨어마이스터고등학교",
  ];

  const sexList = ["남성", "여성"];
  const studentStatusList = ["재학생", "졸업생"];

  return (
    <SignupFormBox>
      <SignupFormTitle marginBottom={36}>구분</SignupFormTitle>
      <SignupFormFlexWrap>
        {studentStatusList.map((item) => {
          return (
            <SignupFormRadioButtonWrap onClick={() => setStudentStatus(item)}>
              <RadioButton
                name={"studentStatus"}
                isSelected={studentStatus === item}
              />
              <SignupFormRadioButtonText>{item}</SignupFormRadioButtonText>
            </SignupFormRadioButtonWrap>
          );
        })}
      </SignupFormFlexWrap>
      <SignupFormTitle marginBottom={13}>이름</SignupFormTitle>
      <SignupFormTextInput width={"250px"} />
      <SignupFormBirthTitleWrap>
        <SignupFormBirthTitle>생년월일</SignupFormBirthTitle>
        <SignupFormGuideBirthRule>ex) 20050624</SignupFormGuideBirthRule>
      </SignupFormBirthTitleWrap>
      <SignupFormTextInput width={"250px"} />
      <SignupFormTitle marginBottom={36}>성별</SignupFormTitle>
      <SignupFormFlexWrap>
        {sexList.map((item) => {
          return (
            <SignupFormRadioButtonWrap onClick={() => setSexSelect(item)}>
              <RadioButton name={"sex"} isSelected={sexSelect === item} />
              <SignupFormRadioButtonText>{item}</SignupFormRadioButtonText>
            </SignupFormRadioButtonWrap>
          );
        })}
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
      <SignupFormTitle marginBottom={13}>학교 이메일</SignupFormTitle>
      <SignupFormFlexWrap>
        <SignupFormTextInput width={"100%"} style={{ marginBottom: 0 }} />
        {studentStatus === "재학생" && (
          <SignupFormSchoolMailText>
            {schoolEmailTransform(schoolSelect)}
          </SignupFormSchoolMailText>
        )}
        <SignupFormSubmitButton isGraduate={studentStatus === "졸업생"}>
          인증번호 보내기
        </SignupFormSubmitButton>
      </SignupFormFlexWrap>
      <SignupFormTitle marginBottom={13}>인증번호</SignupFormTitle>
      <SignupFormFlexWrap>
        <SignupFormTextInput width={"100%"} style={{ marginBottom: 0 }} />
        <SignupFormSubmitButton isGraduate>
          인증번호 보내기
        </SignupFormSubmitButton>
      </SignupFormFlexWrap>
    </SignupFormBox>
  );
};

export default SignupForm;
