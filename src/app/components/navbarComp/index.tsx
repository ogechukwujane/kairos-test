import React from "react";

import S from "./style.module.scss";
import Image from "next/image";
import { logo } from "@/app/assest";

export const NavbarComp = () => {
  return (
    <div className={S.NavbarComp}>
      <div className={S.logo_wrap}>
        <Image src={logo} alt="Logo" width={152} height={52}/>
      </div>
    </div>
  );
};
