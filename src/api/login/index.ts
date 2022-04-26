import { ILoginProps, ILoginResponse } from "../../interface/Login/Login.type";
import instance from "../../lib/axios/CustomAxios";

export const postLogin = async ({
  account_id,
  password,
}: ILoginProps): Promise<ILoginResponse> => {
  const bodyData = {
    account_id,
    password,
  };

  try {
    const { data } = await instance.post<ILoginResponse>(
      "/auth/tokes",
      bodyData
    );
    return data;
  } catch (error) {
    throw error;
  }
};
