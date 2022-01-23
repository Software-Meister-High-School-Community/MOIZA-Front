import { atom } from "recoil";
import {
  IFindIdDataProps,
  IFindPwDataProps,
  IFindPwResetDataProps,
} from "../../interface/FindAuthData/FindAuthData.type";

export const findIdCheckData = atom<IFindIdDataProps>({
  key: "findIdData",
  default: {
    email: "",
  },
});

export const FindIdCertificationNumber = atom<string>({
  key: "FindIdCertificationNumber",
  default: "",
});

export const findPwData = atom<IFindPwDataProps>({
  key: "findPwData",
  default: {
    id: "",
  },
});

export const findPwCertificationNumber = atom<string>({
  key: "findPwCertificationNumber",
  default: "",
});

export const findPwResetData = atom<IFindPwResetDataProps>({
  key: "findPwResetData",
  default: {
    pw: "",
    checkPw: "",
  },
});
