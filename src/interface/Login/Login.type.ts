export interface ILoginProps {
  account_id: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  expired_at: string;
  refresh_token: string;
}
