import {
  IFindPwDataProps,
  IFindPwResetDataProps,
} from "../interface/FindAuthData/FindAuthData.type";

export const findCertificationNullCheck = (data: string) => {
  let isNull: boolean = true;
  if (data === "") return true;

  isNull = false;
  return isNull;
};

export const findPwDataNullCheck = (data: IFindPwDataProps) => {
  let isNull: boolean = false;
  if (data?.id === "") return true;

  isNull = false;
  return isNull;
};

export const findPwResetDataNullCheck = (data: IFindPwResetDataProps) => {
  let isNull: boolean = false;
  if (data?.pw === "") return true;
  if (data?.checkPw === "") return true;

  isNull = false;
  return isNull;
};
