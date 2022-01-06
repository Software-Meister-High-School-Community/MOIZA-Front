export interface ISubmitButtonProps {
  big: boolean;
  text: string;
  disable?: boolean;
  blue?: boolean;
  yellow?: boolean;
  handleClick?: () => void | Promise<void>;
}
