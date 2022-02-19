import React from "react";
import "./DegerlerStyle.css";
import Lottie from "react-lottie";
import animationData from "./motivasyonAnimation.json";

function MotivContentMotiv(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="float-parent-element">
      <div className="float-child-element">
        {/* <div className="imageMotivasyon">
          <img id="motivasyon" src="/kurumsalImages/motivasyon.jpg" alt=""></img>
        </div> */}
         <div className="motivAnimation">
          <Lottie options={defaultOptions} height={550} width={550} />
        </div>
      </div>
      <div className="float-child-element">
        <div className="content2">
          <h1 id="motivasyonHeader">
            MOTİVASYONUMUZ
          </h1>
          <p id="motivContent">
            Danışmanlık sürecinde en büyük motivasyonumuz geliştirirken
            gelişmektir.
          </p>
        </div>
      </div>
    </div>
  );
}
export default MotivContentMotiv;
