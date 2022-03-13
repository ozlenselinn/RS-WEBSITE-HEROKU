import React from "react";
import OrtaklarDesktop from "./OrtaklarDesktop";
import OrtaklarMobile from "./OrtaklarMobile";
import "./OrtakDesktop.css";
import "./OrtakMobile.css";
import { useMediaQuery } from "react-responsive";

function Topluluklar(props) {

  const isDesktopOrLaptop = useMediaQuery({query: "(min-width: 1200px)",});
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
       {isDesktopOrLaptop && <OrtaklarDesktop></OrtaklarDesktop>}
      {isTabletOrMobile && <OrtaklarMobile></OrtaklarMobile>}
    </div>
  );
}

export default Topluluklar;