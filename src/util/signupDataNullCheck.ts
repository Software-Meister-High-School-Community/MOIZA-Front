import {
  ISignupFormDataProps,
  ISignupIdPwFormDataProps,
  ISignupTermsFormDataProps,
} from "../interface/Signup/Signup.type";

export const signupFormDataNullcheck = (data: ISignupFormDataProps) => {
  let isNull: boolean = true;
  if (data?.name === "") return true;
  if (data?.email === "") return true;
  if (data?.birthday === "") return true;
  if (data?.certificationNumber === "") return true;

  isNull = false;

  return isNull;
};

export const signupIdPwFormDataNullCheck = (data: ISignupIdPwFormDataProps) => {
  let isNull: boolean = true;
  if (data.account_id === "") return true;
  if (data.password === "") return true;
  if (data.checkPw === "") return true;
  isNull = false;

  return isNull;
};
