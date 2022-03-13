import React from "react";
import MulakatDesktop from "./mulakatContent/MulakatDesktop";
import MulakatMobile from "./mulakatContent/MulakatMobile";
import { useMediaQuery } from "react-responsive";
import "./mulakatContent/MulakatMobile.css";
import "./mulakatContent/MulakatDesktop.css";

function Mulakat(props) {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1200px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      {isDesktopOrLaptop && <MulakatDesktop></MulakatDesktop>}
      {isTabletOrMobile && <MulakatMobile></MulakatMobile>}
    </div>
  );
}

export default Mulakat;
