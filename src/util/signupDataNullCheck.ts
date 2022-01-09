import {
  ISignupFormDataProps,
  ISignupIdPwFormDataProps,
  ISignupTermsFormDataProps,
} from "../interface/Signup/Signup.type";

export const signupFormDataNullcheck = (data: ISignupFormDataProps) => {
  let isNull: boolean = true;
  if (data?.name === "") return true;
  if (data?.email === "") return true;
  if (data?.birth === "") return true;
  if (data?.certificationNumber === "") return true;

  isNull = false;

  return isNull;
};

export const signupIdPwFormDataNullCheck = (data: ISignupIdPwFormDataProps) => {
  let isNull: boolean = true;
  if (data.id === "") return true;
  if (data.pw === "") return true;
  if (data.checkPw === "") return true;
  isNull = false;

  return isNull;
};
