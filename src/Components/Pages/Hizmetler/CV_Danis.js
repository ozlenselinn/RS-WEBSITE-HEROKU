import React from "react";
// import { Link } from "react-router-dom";
import CvHizmetDesktop from "./cvHizmetContent/CvHizmetDesktop";
import CvHizmetMobile from "./cvHizmetContent/CvHizmetMobile";
import { useMediaQuery } from "react-responsive";
import "./cvHizmetContent/cvMobile.css";
import "./cvHizmetContent/cvDesktop.css";

function CV_Danis(props) {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1200px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
    <div>
      {isDesktopOrLaptop && (
        <CvHizmetDesktop></CvHizmetDesktop>
      )}
      {isTabletOrMobile && (
        <CvHizmetMobile></CvHizmetMobile>
      )}
    </div>

    <div className="buttons">
     <a href="LinkedIn">
     <div class="l-arrow-circ"></div>
     </a>
     <a href = "Motivasyon">
     <div class="r-arrow-circ"></div>
     </a> 
    </div>

    </>
  );
}

export default CV_Danis;
