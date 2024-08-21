import React, { FC } from "react";
import { BiLoaderCircle } from "react-icons/bi";

import S from "./style.module.scss";

interface ITextInputComp {
  text: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export const ButtonComp: FC<ITextInputComp> = ({
  text,
  onClick,
  isLoading,
  disabled,
}) => {
  return (
    <button className={S.ButtonComp} onClick={onClick} disabled={disabled}>
      {isLoading ? (
          <BiLoaderCircle className={S.loader} size={25} />
      ) : (
        <p className={S.btn_text}>{text}</p>
      )}
    </button>
  );
};
