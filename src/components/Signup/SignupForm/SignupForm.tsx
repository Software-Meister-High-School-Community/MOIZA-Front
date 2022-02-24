import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  registerSchoolSelect,
  SignupFormData,
} from "../../../store/Signup/registerInfoAtom";
import { schoolEmailTransform } from "../../../util/schoolEmailTransform";
import SubmitButton from "../../Common/Button/SubmitButton";
import OptionButton from "../../Common/Select/OptionButton";
import RadioButton from "../../Common/Select/RadioButton";
import { SignupFooterWrap, SignupFormsWrap } from "../Signup.style";
import * as SF from "./SignupForm.style";
import * as CONST from "../Constant/index";
import useSignupInfo from "../../../hooks/signup/useSignupInfo";
import TextInput from "../../Common/Input/TextInput";

const SignupForm: React.FC = () => {
  const [schoolSelect, setSchoolSelect] = useRecoilState(registerSchoolSelect);
  const [userInfo, setUserInfo] = useRecoilState(SignupFormData);

  const {
    sexSelect,
    setSexSelect,
    studentStatus,
    setStudentStatus,
    sendCertificationNumber,
    isInfoComplete,
    handleInfo,
    onSendCertificationNumber,
    checkCertification,
    goToSetPw,
  } = useSignupInfo();

  useEffect(() => {
    setUserInfo((prev) => ({
      ...prev,
      sex: sexSelect,
      schoolSelect: schoolSelect,
      studentStatus: studentStatus,
    }));
  }, [sexSelect, schoolSelect, studentStatus, setUserInfo]);

  return (
    <SignupFormsWrap>
      <SF.SignupFormBox>
        <SF.SignupFormTitle marginBottom={36}>구분</SF.SignupFormTitle>
        <SF.SignupFormFlexWrap>
          <RadioButton
            selected={studentStatus}
            setSelected={setStudentStatus}
            radioArray={CONST.StudentStatusList}
            name="studentStatusSelect"
          />
        </SF.SignupFormFlexWrap>
        <SF.SignupFormTitle marginBottom={13}>이름</SF.SignupFormTitle>

        <TextInput
          width="250"
          value={userInfo.name}
          setValue={handleInfo}
          type="text"
          name="name"
          margin={"0px 0px 70px 0px"}
        />
        <SF.SignupFormBirthTitleWrap>
          <SF.SignupFormBirthTitle>생년월일</SF.SignupFormBirthTitle>
          <SF.SignupFormGuideBirthRule>
            ex) 20050624
          </SF.SignupFormGuideBirthRule>
        </SF.SignupFormBirthTitleWrap>
        <TextInput
          width="250"
          value={userInfo.birth}
          setValue={handleInfo}
          type="text"
          name="birth"
          margin={"0px 0px 70px 0px"}
        />
        <SF.SignupFormTitle marginBottom={36}>성별</SF.SignupFormTitle>
        <SF.SignupFormFlexWrap>
          <RadioButton
            selected={sexSelect}
            setSelected={setSexSelect}
            radioArray={CONST.SexList}
            name="sexSelect"
          />
        </SF.SignupFormFlexWrap>
        <SF.SignupFormTitle marginBottom={13}>학교선택</SF.SignupFormTitle>
        <SF.SignupFormSchoolWrap>
          {CONST.SchoolList.map((item) => {
            return (
              <SF.SignupFormSchoolButton name={item} key={item}>
                <OptionButton
                  isSelected={schoolSelect === item}
                  text={item}
                  onClick={setSchoolSelect}
                />
              </SF.SignupFormSchoolButton>
            );
          })}
        </SF.SignupFormSchoolWrap>
        <SF.SignupFormTitle marginBottom={13}>학교 이메일</SF.SignupFormTitle>
        <SF.SignupFormFlexWrap>
          <TextInput
            value={userInfo.email}
            name="email"
            setValue={handleInfo}
            type="text"
          />
          {studentStatus === "재학생" && (
            <SF.SignupFormSchoolMailText>
              {schoolEmailTransform(schoolSelect)}
            </SF.SignupFormSchoolMailText>
          )}
          <SF.SignupFormSubmitButton
            isGraduate={studentStatus === "졸업생"}
            onClick={onSendCertificationNumber}
          >
            인증번호 보내기
          </SF.SignupFormSubmitButton>
        </SF.SignupFormFlexWrap>
        <SF.SignupFormTitle marginBottom={13}>인증번호</SF.SignupFormTitle>
        <SF.SignupFormFlexWrap>
          <TextInput
            type="text"
            value={userInfo.certificationNumber}
            setValue={handleInfo}
            name="certificationNumber"
            disabled={!sendCertificationNumber}
          />
          <SF.SignupFormSubmitButton isGraduate onClick={checkCertification}>
            인증하기
          </SF.SignupFormSubmitButton>
        </SF.SignupFormFlexWrap>
        {studentStatus === "졸업생" && (
          <SF.SignupFormAlertText>
            ※ 가입 후 졸업 인증을 하시면 모이자 이용이 가능합니다.
          </SF.SignupFormAlertText>
        )}
      </SF.SignupFormBox>
      <SignupFooterWrap>
        <SubmitButton
          text={"다음 단계"}
          blue
          big
          disable={isInfoComplete}
          handleClick={goToSetPw}
        />
      </SignupFooterWrap>
    </SignupFormsWrap>
  );
};

export default SignupForm;
