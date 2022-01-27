import { atom } from "recoil";
import { IFindSendCertificationNumber } from "../../interface/FindAuthData/FindAuthData.type";

export const sendCertificationNumberStatus = atom<IFindSendCertificationNumber>(
  {
    key: "sendCertificationNumberStatus",
    default: {
      findIdSendNumber: false,
      findPwSendNumber: false,
    },
  }
);
