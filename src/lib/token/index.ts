import local from "../local";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token.constants";

class token {
  public getToken(key: string): string | undefined {
    let item = undefined;

    if (local.get(key) !== null) {
      item = local.get(key) as string;
    }

    return item;
  }

  public setToken(key: string, value: string): void {
    local.set(key, value);
  }

  public clearToken(): void {
    local.remove(ACCESS_TOKEN_KEY);
    local.remove(REFRESH_TOKEN_KEY);
  }
}

export default new token();
