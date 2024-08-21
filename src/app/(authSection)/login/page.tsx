"use client";

import React, { useState } from "react";
import { ButtonComp, TextInputComp } from "@/app/components";
import { FaRegEnvelope } from "react-icons/fa";
import Image from "next/image";
import { pattern1, pattern2, pattern3 } from "@/app/assest";

import S from "./style.module.scss";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={S.LoginStyle}>
      <div className={S.content_wrap}>
        <div className={S.form_wrap}>
          <p className={S.header}>
            "<span>Finally!</span> A Simple 2-Step System To Generate Up To
            $2,047.50 Month Without Selling Or Recruiting..."
          </p>
          <p className={S.paragraph}>
            To Get Started Here By Entering Your Best Email Below:
          </p>
          <TextInputComp
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter Your Email Here"
            icon={<FaRegEnvelope size={20} />}
          />
          <ButtonComp text="Start Now" />
        </div>
        <div className={S.footer_wrap}>
          <p className={S.footer_text}>Terms Of Service</p>
          <div className={S.line} />
          <p className={S.footer_text}>Earnings Disclaimer</p>
          <div className={S.line} />
          <p className={S.footer_text}>Privacy Policy</p>
          <div className={S.line} />
          <p className={S.footer_text}>Member Login</p>
        </div>
        <div className={S.pattern1}>
          <Image src={pattern1} alt="pattern" />
        </div>
        <div className={S.pattern2}>
          <Image src={pattern2} alt="pattern" />
        </div>
        <div className={S.pattern3}>
          <Image src={pattern3} alt="pattern" />
        </div>
      </div>
    </div>
  );
};

export default Login;
