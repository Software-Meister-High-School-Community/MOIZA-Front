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

export const registerSchoolSelect = atom({
  key: "registerSchoolSelect",
  default: {
    gwangju: true,
    daegu: false,
    daeduck: false,
    mirim: false,
    busan: false,
  },
});
