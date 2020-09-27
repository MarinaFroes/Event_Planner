
export interface BtnProps {
  primaryBtn: boolean;
  btnText: string;
  btnWidth?: string;
  btnType: "button" | "submit" | "reset";
  onClick?: () => void;
}