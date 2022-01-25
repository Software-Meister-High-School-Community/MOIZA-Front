import { atom } from "recoil";
import {
  IFindPwDataProps,
  IFindPwResetDataProps,
} from "../../interface/FindAuthData/FindAuthData.type";

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
