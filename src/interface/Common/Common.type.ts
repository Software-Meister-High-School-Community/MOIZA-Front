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
  onClick?: Dispatch<SetStateAction<boolean>>;
}

export interface IRadioButtonProps {
  name : string;
  radioArray : Array<{
    summary : string;
    id : string;
  }>
  selected : string;
  setSelected : (selectId:string) => void;
}

export interface OptionArrType {
  option : string
}

export interface IDropdownProps {
  options : Array<OptionArrType>
  value : string;
  setValue : (value:string) => void
}