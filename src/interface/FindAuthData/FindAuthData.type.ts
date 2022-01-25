export interface IFindIdResultProps {
  name: string;
  resultId: string;
}

export interface IFindPwDataProps {
  id: string;
}

export interface IFindPwResetDataProps {
  pw: string;
  checkPw: string;
}

export interface IFindSendCertificationNumber {
  findIdSendNumber: boolean;
  findPwSendNumber: boolean;
}
