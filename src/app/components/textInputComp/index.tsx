import React, { FC } from "react";

import S from "./style.module.scss";

interface ITextInputComp {
  placeholder: string;
  errorMessage?: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInputComp: FC<ITextInputComp> = ({
  errorMessage,
  placeholder,
  icon,
  value,
  onChange,
  ...rest
}) => {
  return (
    <div className={S.TextInputComp}>
      <div className={S.container}>
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
        {icon && <div className={S.icon_wrap}>{icon}</div>}
      </div>
      {errorMessage && <p className={S.error_message}>{errorMessage}</p>}
    </div>
  );
};
