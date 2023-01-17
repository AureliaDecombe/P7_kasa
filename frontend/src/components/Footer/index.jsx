import React from "react";
import Logo from "../../assets/darkLogo.svg";

export default function Footer() {
  return (
    <footer>
      <div className='footerDiv'>
        <img className='footerDiv__logo' src={Logo} alt='logo KASA'></img>
        <span className='footerDiv__span'>
          © 2020 Kasa. All rights reserved
        </span>
      </div>
    </footer>
  );
}
