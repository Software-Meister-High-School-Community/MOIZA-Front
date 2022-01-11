import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  registerSchoolSelect,
  SignupFormData,
} from "../../../store/Signup/registerInfoAtom";
import { schoolEmailTransform } from "../../../util/schoolEmailTransform";
import { signupFormDataNullcheck } from "../../../util/signupDataNullCheck";
import SubmitButton from "../../Common/Button/SubmitButton";
import OptionButton from "../../Common/Select/OptionButton";
import RadioButton from "../../Common/Select/RadioButton";
import { SignupFormsWrap } from "../Signup.style";
import * as SF from "./SignupForm.style";
import * as CONST from "../Constant/index";

const SignupForm: React.FC = () => {
  const [schoolSelect, setSchoolSelect] = useRecoilState(registerSchoolSelect);
  const [sexSelect, setSexSelect] = useState("남성");
  const [studentStatus, setStudentStatus] = useState("재학생");
  const [userInfo, setUserInfo] = useRecoilState(SignupFormData);
  const [sendCertificationNumber, setSendCertificationNumber] = useState(false);
  const [notCheckCertificationNumber, setNotCheckCertificationNumber] =
    useState(true);

  useEffect(() => {
    setUserInfo((prev) => ({
      ...prev,
      sex: sexSelect,
      schoolSelect: schoolSelect,
      studentStatus: studentStatus,
    }));
  }, [sexSelect, schoolSelect, studentStatus, setUserInfo]);

  const setFullEmail = (): void => {
    setUserInfo((prev) => ({
      ...prev,
      email: userInfo.email + schoolEmailTransform(userInfo.schoolSelect),
    }));
  };

  const isNull = signupFormDataNullcheck(userInfo);

  return (
    <SignupFormsWrap>
      <SF.SignupFormBox>
        <SF.SignupFormTitle marginBottom={36}>구분</SF.SignupFormTitle>
        <SF.SignupFormFlexWrap>

        </SF.SignupFormFlexWrap>
        <SF.SignupFormTitle marginBottom={13}>이름</SF.SignupFormTitle>
        <SF.SignupFormTextInput
          width={"250px"}
          name="name"
          value={userInfo.name}
          onChange={(e) =>
            setUserInfo((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <SF.SignupFormBirthTitleWrap>
          <SF.SignupFormBirthTitle>생년월일</SF.SignupFormBirthTitle>
          <SF.SignupFormGuideBirthRule>
            ex) 20050624
          </SF.SignupFormGuideBirthRule>
        </SF.SignupFormBirthTitleWrap>
        <SF.SignupFormTextInput
          width={"250px"}
          name="birth"
          onChange={(e) =>
            setUserInfo((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <SF.SignupFormTitle marginBottom={36}>성별</SF.SignupFormTitle>
        <SF.SignupFormFlexWrap>
        </SF.SignupFormFlexWrap>
        <SF.SignupFormTitle marginBottom={13}>학교선택</SF.SignupFormTitle>
        <SF.SignupFormSchoolWrap>
          {CONST.SchoolList.map((item, index) => {
            return (
              <SF.SignupFormSchoolButton name={item} key={index}>
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
          <SF.SignupFormTextInput
            width={"100%"}
            style={{ marginBottom: 0 }}
            name="email"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          {studentStatus === "재학생" && (
            <SF.SignupFormSchoolMailText>
              {schoolEmailTransform(schoolSelect)}
            </SF.SignupFormSchoolMailText>
          )}
          <SF.SignupFormSubmitButton
            isGraduate={studentStatus === "졸업생"}
            onClick={() => setSendCertificationNumber(true)}
          >
            인증번호 보내기
          </SF.SignupFormSubmitButton>
        </SF.SignupFormFlexWrap>
        <SF.SignupFormTitle marginBottom={13}>인증번호</SF.SignupFormTitle>
        <SF.SignupFormFlexWrap>
          <SF.SignupFormTextInput
            width={"100%"}
            style={{ marginBottom: 0 }}
            name="certificationNumber"
            value={userInfo.certificationNumber}
            onChange={(e) =>
              setUserInfo((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            disabled={!sendCertificationNumber}
          />
          <SF.SignupFormSubmitButton
            isGraduate
            onClick={() => setNotCheckCertificationNumber(false)}
          >
            인증하기
          </SF.SignupFormSubmitButton>
        </SF.SignupFormFlexWrap>
        <SF.SignupFormAlertText>
          ※ 가입 후 졸업 인증을 하시면 모이자 이용이 가능합니다.
        </SF.SignupFormAlertText>
      </SF.SignupFormBox>
      <Link to="idpw">
        <SubmitButton
          text={"다음 단계"}
          blue
          big
          disable={isNull || notCheckCertificationNumber}
          handleClick={setFullEmail}
        />
      </Link>
    </SignupFormsWrap>
  );
};

export default SignupForm;
