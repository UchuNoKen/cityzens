import React from "react";
import { CityLogo } from "../UI/icons";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo width="70px" height="70px" linkTo="/" />
      </div>
      <div className="footer_disclaimer">Manchester City 2019. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
