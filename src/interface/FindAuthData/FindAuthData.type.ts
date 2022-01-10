export interface IFindIdResultProps {
  name: string;
  resultId: string;
}

export interface IFindIdDataProps {
  name: string;
  birth: string;
  email: string;
  certificationNumber: string;
}

export interface IFindPwDataProps extends IFindIdDataProps {
  id: string;
}

export interface IFindPwResetDataProps {
  pw: string;
  checkPw: string;
}
