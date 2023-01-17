import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";

const logo = "/logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
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

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      id="header"
      className="flex justify-between flex-row-reverse md:flex-row px-6 py-2 bg-[#fff]"
    >
      <div>
        <Image src={logo} height={226} width={128} alt="logo"></Image>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-5 font-medium uppercase font-lato">
          <Link href={"#"}>
            <li>Home</li>
          </Link>
          <Link href={"#services"}>
            <li>Services</li>
          </Link>
          <Link href={"#portfolio"}>
            <li>Our Work</li>
          </Link>
          <Link href={"#contact-us"}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </nav>
      {/* mobile menu */}
      <div className="flex flex-col items-start pt-3 md:hidden">
        <div className="text-4xl cursor-pointer" onClick={handleShowMenu}>
          {!showMenu ? <IoMenuSharp /> : <IoCloseSharp />}
        </div>
        {showMenu && (
          <AnimatePresence>
            <motion.nav
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0, transition: { stiffness: 1 } }}
              exit={{ opacity: 0, y: -300 }}
            >
              <ul className="flex flex-col pt-5 space-y-6 font-bold uppercase font-lato">
                <Link href={"#"} onClick={handleShowMenu}>
                  <li>Home</li>
                </Link>
                <Link href={"#services"} onClick={handleShowMenu}>
                  <li>Services</li>
                </Link>
                <Link href={"#portfolio"} onClick={handleShowMenu}>
                  <li>Our Work</li>
                </Link>
                <Link href={"#contact-us"} onClick={handleShowMenu}>
                  <li>Contact</li>
                </Link>
              </ul>
            </motion.nav>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Header;
