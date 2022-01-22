export interface IFindIdResultProps {
  name: string;
  resultId: string;
}

export interface IFindIdDataProps {
  email: string;
}

export interface IFindPwDataProps {
  id: string;
  name: string;
  birth: string;
  email: string;
  certificationNumber: string;
}

export interface IFindPwResetDataProps {
  pw: string;
  checkPw: string;
}

export interface IFindSendCertificationNumber {
  findIdSendNumber: boolean;
  findPwSendNumber: boolean;
}
