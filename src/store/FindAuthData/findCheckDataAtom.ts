import { atom } from "recoil";
import {
  IFindIdDataProps,
  IFindPwDataProps,
  IFindPwResetDataProps,
} from "../../interface/FindAuthData/FindAuthData.type";

export const findIdData = atom<IFindIdDataProps>({
  key: "findIdData",
  default: {
    name: "",
    birth: "",
    email: "",
    certificationNumber: "",
  },
});

export const findPwData = atom<IFindPwDataProps>({
  key: "findPwData",
  default: {
    id: "",
    name: "",
    birth: "",
    email: "",
    certificationNumber: "",
  },
});

export const findPwResetData = atom<IFindPwResetDataProps>({
  key: "findPwResetData",
  default: {
    pw: "",
    checkPw: "",
  },
});
