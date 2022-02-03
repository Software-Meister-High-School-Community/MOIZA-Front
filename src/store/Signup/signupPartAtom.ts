import { atom } from "recoil";

export const signupPart = atom<string>({
  key: "signupPart",
  default: "약관동의",
});
