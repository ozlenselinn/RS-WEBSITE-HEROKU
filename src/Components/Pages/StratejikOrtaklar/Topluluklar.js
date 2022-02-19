import React from "react";
import OrtaklarComponentDesktop from "./OrtaklarComponentDesktop";
import OrtaklarComponentMobile from "./OrtaklarComponentMobile";
import "./OrtakDesktop.css";
import "./OrtakMobile.css";
import { useMediaQuery } from "react-responsive";

function Topluluklar(props) {

  const isDesktopOrLaptop = useMediaQuery({query: "(min-width: 1200px)",});
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
       {isDesktopOrLaptop && <OrtaklarComponentDesktop></OrtaklarComponentDesktop>}
      {isTabletOrMobile && <OrtaklarComponentMobile></OrtaklarComponentMobile>}
    </div>
  );
}

export default Topluluklar;