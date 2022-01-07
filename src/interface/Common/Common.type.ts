import { Dispatch, SetStateAction } from "react";

export interface ISubmitButtonProps {
  big: boolean;
  text: string;
  disable?: boolean;
  blue?: boolean;
  yellow?: boolean;
  handleClick?: () => void | Promise<void>;
}

export interface IOptionButtonProps {
  text: string;
  isSelected: boolean;
  onClick?: Dispatch<SetStateAction<string>>;
}

export interface IRadioButtonProps {
  isSelected: boolean;
  onClick?: Dispatch<SetStateAction<boolean>>;
}
