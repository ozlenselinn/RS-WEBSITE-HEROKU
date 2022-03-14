import React from 'react';
//import { Link } from "react-router-dom";
import MotivDesktop from "./motivasyonContent/MotivDesktop";
import MotivMobile from "./motivasyonContent/MotivMobile";
import { useMediaQuery } from "react-responsive";
import "./motivasyonContent/MotivMobile.css";
import "./motivasyonContent/MotivDesktop.css";

function MotivMektup(props) {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1200px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
    
      <div>
      {isDesktopOrLaptop && (
        <MotivDesktop></MotivDesktop>
      )}
      {isTabletOrMobile && (
        <MotivMobile></MotivMobile>
      )}

      {/* <div className="row4">
      <div className="yonlendirmeGeri"><Link to={"./MotivMektup"}>Bir önceki hizmet</Link></div>
      <div className="yonlendirmeIleri"><Link to={"./Linkedin"}>Bir sonraki hizmet</Link></div>

      </div> */}
    </div>

    <div className="buttons">
     <a href="CV_Danis">
     <div class="l-arrow-circ"></div>
     </a>
     <a href = "Egitim">
     <div class="r-arrow-circ"></div>
     </a> 
    </div>
    </>

  );
}

export default MotivMektup; 