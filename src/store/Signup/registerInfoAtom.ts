import { atom } from "recoil";

export const registerInfo = atom({
  key: "registerInfo",
  default: {
    studentStatus: 0,
    name: "",
    birth: "",
    sex: 0,
    email: "",
    certificationNumber: "",
  },
});

export const registerSchoolSelect = atom<string>({
  key: "registerSchoolSelect",
  default: "광주소프트웨어마이스터고등학교",
});
