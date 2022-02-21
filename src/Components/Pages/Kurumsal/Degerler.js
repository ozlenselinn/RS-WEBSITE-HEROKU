import React from "react";
import "./DegerlerContents/ValMotDesktop";
import ValMotDesktop from "./DegerlerContents/ValMotDesktop";
import ValMotMobile from "./DegerlerContents/ValMotMobile";
import "./DegerlerContents/ValMotDesktop.css";
import "./DegerlerContents/ValMotMobile.css";
import { useMediaQuery } from "react-responsive";

function Degerler(props) {

  const isDesktopOrLaptop = useMediaQuery({query: "(min-width: 1200px)",});
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
  
    <div>
    {isDesktopOrLaptop && <ValMotDesktop></ValMotDesktop>}
    {isTabletOrMobile && <ValMotMobile></ValMotMobile>}
  </div>
  );
}

export default Degerler;
