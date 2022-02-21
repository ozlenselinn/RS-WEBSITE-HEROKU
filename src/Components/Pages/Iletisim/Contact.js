import React from "react";
import IletisimDesktop from "./IletisimComponentDesktop";
import IletisimMobile from "./IletisimComponentMobile";
import "./IletisimDesktop.css";
import "./IletisimMobile.css";
import { useMediaQuery } from "react-responsive";

function Contact(props) {

  const isDesktopOrLaptop = useMediaQuery({query: "(min-width: 1200px)",});
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  
  return (
    <div>
    {isDesktopOrLaptop && <IletisimDesktop></IletisimDesktop>}
    {isTabletOrMobile && <IletisimMobile></IletisimMobile>}
  </div>
  );
}

export default Contact;
