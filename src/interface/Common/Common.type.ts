import { Dispatch, SetStateAction } from "react";
import { link } from "fs";

export interface ISubmitButtonProps {
  big?: boolean | undefined;
  text: string;
  disable?: boolean;
  blue?: boolean;
  yellow?: boolean;
  name?: string;
  handleClick?: (e?: any) => void | Promise<void>;
}

export interface IOptionButtonProps {
  text: string;
  isSelected: boolean;
  onClick?: Dispatch<SetStateAction<string>>;
}

export interface IRadioButtonProps {
  name: string;
  radioArray: Array<{
    summary: string;
    id: string;
  }>;
  selected: string;
  setSelected: (selectId: string) => void;
}

export interface OptionArrType {
  option: string;
}

export interface IDropdownProps {
  options: Array<OptionArrType>;
  value: string;
  onChangeValue: (value: string) => void;
}

export interface PathType {
  path: string;
  link: string;
}

export interface UploadDataType {
  title: string;
  content: string;
  files: File[];
}

export interface IEyeButtonProps {
  isShow: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
  left?: number;
}

export interface IPaginationProps {
  total: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
export interface SeeMoreOptionInterface {
  option: string;
  onClickFunction: () => void;
}

export interface IImageSizeProps {
  width: number;
  height: number;
}
