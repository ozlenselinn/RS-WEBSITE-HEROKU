import React from "react";
// import { Link } from "react-router-dom";
import LinkedinDesktop from "./linkedinContent/LinkedinDesktop";
import LinkedinMobile from "./linkedinContent/LinkedinMobile";
import { useMediaQuery } from "react-responsive";
import "./linkedinContent/LinkedinMobile.css";
import "./linkedinContent/LinkedinDesktop.css";
import './sayfaGecis.css';

function Linkedin(props) {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1200px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
    <div>
      {isDesktopOrLaptop && <LinkedinDesktop></LinkedinDesktop>}
      {isTabletOrMobile && <LinkedinMobile></LinkedinMobile>}

      {/* <div className="row4">
        <div className="yonlendirmeGeri">
          <Link to={"./MotivMektup"}>Bir önceki hizmet</Link>
        </div>
        <div className="yonlendirmeIleri">
          <Link to={"./Egitim"}>Bir sonraki hizmet</Link>
        </div>
      </div> */}
    </div>
    <div className="buttons">
     
   
    <a href = "CV_Danis">
    <div class="r-arrow-circ"></div>
    </a> 
   </div>
    </>
  );
}
export default Linkedin;
