import React from 'react';
//import { Link } from "react-router-dom";
import EgitimDesktop from "./egitimContent/EgitimDesktop";
import EgitimMobile from "./egitimContent/EgitimMobile";
import { useMediaQuery } from "react-responsive";
import "./egitimContent/EgitimMobile.css";
import "./egitimContent/EgitimDesktop.css";

function Egitim(props) {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1200px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      {isDesktopOrLaptop && (
        <EgitimDesktop></EgitimDesktop>
      )}
      {isTabletOrMobile && (
        <EgitimMobile></EgitimMobile>
      )}
      </div>
    

  );
}

export default Egitim;