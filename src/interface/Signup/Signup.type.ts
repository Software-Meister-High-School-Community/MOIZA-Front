export interface ISignupFormDataProps {
  user_type: string;
  name: string;
  birthday: string;
  sex: string;
  school: string;
  email: string;
  certificationNumber: string;
}

export interface ISignupTermsFormDataProps {}

export interface ISignupIdPwFormDataProps {
  account_id: string;
  password: string;
  checkPw: string;
}

export interface ISignupProps
  extends ISignupFormDataProps,
    ISignupIdPwFormDataProps {}

export interface ISignupCertificationProps {
  scope: string;
  type: string;
  value: string;
}

export interface ISignupCheckCertificationProps {
  email: string;
  auth_code: string;
  type: string;
}
