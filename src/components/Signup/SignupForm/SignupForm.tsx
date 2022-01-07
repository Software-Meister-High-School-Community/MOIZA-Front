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

  const ToggleSchoolSelect = (schoolName: string): void => {
    switch (schoolName) {
      case (schoolName = "gwangju"):
        setSchoolSelect({
          gwangju: true,
          daegu: false,
          daeduck: false,
          mirim: false,
          busan: false,
        });
        break;

      case (schoolName = "daegu"):
        setSchoolSelect({
          gwangju: false,
          daegu: true,
          daeduck: false,
          mirim: false,
          busan: false,
        });
        break;
      case (schoolName = "daeduck"):
        setSchoolSelect({
          gwangju: false,
          daegu: false,
          daeduck: true,
          mirim: false,
          busan: false,
        });
        break;
      case (schoolName = "mirim"):
        setSchoolSelect({
          gwangju: false,
          daegu: false,
          daeduck: false,
          mirim: true,
          busan: false,
        });
        break;
      case (schoolName = "busan"):
        setSchoolSelect({
          gwangju: true,
          daegu: false,
          daeduck: false,
          mirim: false,
          busan: true,
        });
        break;

      default:
        setSchoolSelect({
          gwangju: true,
          daegu: false,
          daeduck: false,
          mirim: false,
          busan: false,
        });
        break;
    }
  };

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
        <li
          value="daegu"
          onClick={() =>
            setSchoolSelect((prev) => ({ ...prev, daegu: !schoolSelect.daegu }))
          }
        >
          <OptionButton
            isSelected={schoolSelect.daegu}
            text={"대구소프트웨어마이스터고등학교"}
          />
        </li>
        <li
          value="daeduck"
          onClick={() =>
            setSchoolSelect((prev) => ({
              ...prev,
              daeduck: !schoolSelect.daeduck,
            }))
          }
        >
          <OptionButton
            isSelected={schoolSelect.daeduck}
            text={"대덕소프트웨어마이스터고등학교"}
          />
        </li>
        <li
          value="daegu"
          onClick={() =>
            setSchoolSelect((prev) => ({
              ...prev,
              gwangju: !schoolSelect.gwangju,
            }))
          }
        >
          <OptionButton
            isSelected={schoolSelect.gwangju}
            text={"광주소프트웨어마이스터고등학교"}
          />
        </li>
        <li
          value="daegu"
          onClick={() =>
            setSchoolSelect((prev) => ({
              ...prev,
              mirim: !schoolSelect.mirim,
            }))
          }
        >
          <OptionButton
            isSelected={schoolSelect.mirim}
            text={"미림마이스터고등학교"}
          />
        </li>
        <li
          value="daegu"
          onClick={() =>
            setSchoolSelect((prev) => ({
              ...prev,
              busan: !schoolSelect.busan,
            }))
          }
        >
          <OptionButton
            isSelected={schoolSelect.busan}
            text={"부산소프트웨어마이스터고등학교"}
          />
        </li>
      </SignupFormSchoolWrap>
    </SignupFormBox>
  );
};

export default SignupForm;
