import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const logo = "/logo.png";

const Header = () => {
  useEffect(() => {
    const header = document.getElementById("header");
    const onScroll = () => {
      if (window.scrollY !== 0) {
        header?.classList.add("shadow-lg");
      } else {
        header?.classList.remove("shadow-lg");
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div
      id="header"
      className="flex items-center justify-between px-6 py-2 bg-[#fff]"
    >
      <div>
        <Image src={logo} height={226} width={128} alt="logo"></Image>
      </div>
      <nav>
        <ul className="flex space-x-5 font-medium uppercase font-lato">
          <Link href={"#"}>
            <li>Home</li>
          </Link>
          <Link href={"#about"}>
            <li>About</li>
          </Link>
          <Link href={"#contact-us"}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
