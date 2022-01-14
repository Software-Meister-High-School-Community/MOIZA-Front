import {
  IFindIdDataProps,
  IFindPwDataProps,
  IFindPwResetDataProps,
} from "../interface/FindAuthData/FindAuthData.type";

export const findIdDataNullCheck = (data: IFindIdDataProps) => {
  let isNull: boolean = true;
  if (data?.name === "") return true;
  if (data?.birth === "") return true;
  if (data?.email === "") return true;
  if (data?.certificationNumber === "") return true;

  isNull = false;
  return isNull;
};

export const findPwDataNullCheck = (data: IFindPwDataProps) => {
  let isNull: boolean = false;
  if (data?.id === "") return true;
  if (data?.name === "") return true;
  if (data?.birth === "") return true;
  if (data?.email === "") return true;
  if (data?.certificationNumber === "") return true;

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