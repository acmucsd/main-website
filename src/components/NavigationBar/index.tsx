import Link from "next/link";
import { useEffect, useState } from "react";
import ACMLogo from "public/assets/ACMWhiteLogo.png";
import s from "src/styles/modules/App.module.scss";
import { Size, useWindowSize } from "src/utils";

const navLinks = [
  { to: "#contact", text: "Contact" },
  { to: "/sponsor", text: "Sponsor" },
  { to: "/communities", text: "Communities" },
  { to: "/about", text: "About Us" },
];

const NavigationBar: React.FC = () => {
  const size: Size = useWindowSize();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Switch to mobile less than 920px
  useEffect(() => {
    setMobile(size.width < 920);
  }, [size]);

  // If they go back to desktop size, don't keep the menu open
  useEffect(() => {
    if (!mobile) setMenuOpen(false);
  }, [mobile]);

  return (
    <div className={s.navbarWrapper}>
      <div className={s.navbar}>
        {/* Navbar ACM Logo */}
        <div className={s.left}>
          <Link href="/">
            <a>
              <img src={ACMLogo.src} alt="ACM Logo" />
              <p>at UCSD</p>
            </a>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className={`${s.right} ${mobile && s.hidden}`}>
          {navLinks.map((link, key) => (
            <Link key={key} href={link.to}>
              <a className={s.navItem}>{link.text}</a>
            </Link>
          ))}
          <Link href={"https://members.acmucsd.com/login"}>
            <a className={s.loginButton}>Member Login</a>
          </Link>
        </div>
        {/* Mobile Navbar Toggle */}
        <button className={`${s.toggleIcon} ${!mobile && s.hidden}`} onClick={toggleMenu}>
          <div className={`${s.bar1} ${menuOpen && s.open}`} />
          <div className={`${s.bar2} ${menuOpen && s.open}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${s.mobileNav} ${menuOpen && s.open}`}>
        {navLinks.map((link, key) => (
          <Link key={key} href={link.to}>
            <a className={`${s.navItem}`}>{link.text}</a>
          </Link>
        ))}
      </div>

      {/* Bottom Rainbow */}
      <div className={s.rainbow} />
    </div>
  );
};

export default NavigationBar;
