import { atom } from "recoil";
import {
  IFindIdDataProps,
  IFindPwDataProps,
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
