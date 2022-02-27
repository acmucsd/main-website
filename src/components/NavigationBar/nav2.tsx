import Link from "next/link";
import { useState } from "react";
import ACMLogo from "public/assets/ACMWhiteLogo.png";
import CloseMenuButton from "public/assets/closemenubutton.svg";
import MenuButtonIcon from "public/assets/menubutton.svg";
import s from "src/styles/modules/App.module.scss";

const navLinks = [
  // { to: "/events", text: "Events" },
  { to: "#contact", text: "Contact" },
  { to: "/sponsor", text: "Sponsor" },
  { to: "/communities", text: "Communities" },
  { to: "/about", text: "About Us" },
];

const NavigationBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={s.navbar}>
      <div className={s.left}>
        <Link href="/">
          <a>
            <img src={ACMLogo.src} alt="ACM Logo" />
            <p>at UCSD</p>
          </a>
        </Link>
      </div>
      <div className={`${s.right} ${mobile && s.hidden}`}>
        <nav>
          {navLinks.map((link, key) => (
            <Link key={key} href={link.to}>
              <a className={s.navItem}>{link.text}</a>
            </Link>
          ))}
        </nav>
        <Link href={"https://members.acmucsd.com/login"}>
          <a className={s.loginButton}>Member Login</a>
        </Link>
      </div>
      <button className={`${s.toggleIcon} ${!mobile && s.hidden}`} onClick={toggleMenu}>
        <div className={`${s.bar1} ${menuOpen && s.open}`} />
        <div className={`${s.bar2} ${menuOpen && s.open}`} />
      </button>
      {/* <button className="closebutton" onClick={toggleMenu} type="button">
          <img className="closeicon" src={CloseMenuButton.src} color="white" alt="Menu Icon" />
        </button> */}
      {/* <button className="icon" onClick={toggleMenu} type="button">
          <img className="menuicon" src={MenuButtonIcon.src} alt="Menu Icon" />
        </button> */}
      <div className={s.rainbow} />
    </div>
  );
};

export default NavigationBar;
