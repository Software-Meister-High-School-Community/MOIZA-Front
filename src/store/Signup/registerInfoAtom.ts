import { atom } from "recoil";
import {
  ISignupFormDataProps,
  ISignupIdPwFormDataProps,
  ISignupTermsFormDataProps,
} from "../../interface/Signup/Signup.type";

export const SignupFormData = atom<ISignupFormDataProps>({
  key: "registerInfo",
  default: {
    user_type: "",
    name: "",
    birthday: "",
    school: "광주소프트웨어마이스터고등학교",
    sex: "",
    email: "",
    certificationNumber: "",
  },
});

export const SignupTermsFormData = atom<ISignupTermsFormDataProps>({
  key: "SignupTermsFormData",
  default: {},
});

export const SignupIdPwFormData = atom<ISignupIdPwFormDataProps>({
  key: "SignupIdPwFormDatta",
  default: {
    account_id: "",
    password: "",
    checkPw: "",
  },
});

export const registerSchoolSelect = atom<string>({
  key: "registerSchoolSelect",
  default: "광주소프트웨어마이스터고등학교",
});
