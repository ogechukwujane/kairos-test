import Image from "next/image";
import { NavbarComp } from "../components";
import "./styles.scss";
import { authPattern } from "../assest";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layoutContainer">
      <NavbarComp />
      <section className="layout_content">
        {children}
        <div className="layout_pattern">
          <Image src={authPattern} alt="" />
        </div>
      </section>
    </div>
  );
}
