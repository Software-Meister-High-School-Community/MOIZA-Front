import {
  ISignupCertificationProps,
  ISignupCheckCertificationProps,
  ISignupProps,
} from "../../interface/Signup/Signup.type";
import instance from "../../lib/axios/CustomAxios";

export const postSignup = async (authData: ISignupProps): Promise<void> => {
  try {
    await instance.post<void>("/users", authData);
  } catch (error) {
    throw error;
  }
};

export const postSignupCertification = async (
  certificationData: ISignupCertificationProps
): Promise<void> => {
  try {
    await instance.post<void>("/auth/email-verifications", certificationData);
  } catch (error) {
    throw error;
  }
};

export const headSignupCheckCertification = async (
  checkCertificationData: ISignupCheckCertificationProps
): Promise<void> => {
  try {
    await instance.head<void>("/auth/email-verifications", {
      data: checkCertificationData,
    });
  } catch (error) {
    throw error;
  }
};
