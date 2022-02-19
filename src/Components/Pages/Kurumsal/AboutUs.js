import React from "react";
import AboutContentDesktop from "./AboutContents/AboutContentDesktop";
import AboutContentMobile from "./AboutContents/AboutContentMobile";
import "./AboutContents/AboutUsDesktop.css";
import "./AboutContents/AboutUsMobile.css";
import { useMediaQuery } from "react-responsive";

function AboutUs(props) {
  const isDesktopOrLaptop = useMediaQuery({query: "(min-width: 1200px)",});
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });


  return (
    <div>
      {isDesktopOrLaptop && <AboutContentDesktop></AboutContentDesktop>}
      {isTabletOrMobile && <AboutContentMobile></AboutContentMobile>}
    </div>
  );
}

export default AboutUs;
