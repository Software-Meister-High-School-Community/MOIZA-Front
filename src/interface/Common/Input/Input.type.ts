import React from "react";
import { IEyeButtonProps } from "../Common.type";

export interface ITextInputProps extends IEyeButtonProps {
  width?: string;
  margin?: string;
  type: "text" | "password";
  value: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void | Promise<void>;

  //그냥 setState 할때는 타입을 아직 지정 못함
}
