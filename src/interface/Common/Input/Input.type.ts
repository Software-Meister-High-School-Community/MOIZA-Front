import React, { Dispatch, SetStateAction } from "react";
import { IEyeButtonProps } from "../Common.type";

export interface ITextInputProps extends IEyeButtonProps {
  width?: string;
  margin?: string;
  type: "text" | "password";
  value: string;
  name?: string;
  placeholder?: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
