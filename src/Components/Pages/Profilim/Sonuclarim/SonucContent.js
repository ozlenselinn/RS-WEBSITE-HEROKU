import React from "react";
import EndeksSonucTable from "./EndeksSonucTable";
import CVSonucTable from "./CVSonucTable";
import "./Sonuc.css";

import Lottie from "react-lottie";
import animationData from "./sonucAnimation.json";
import animationData2 from "./sonucAnimation2.json";


function SonucContent(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="float-parent-element">
       <h1 id="sonucHeader">SONUÇLARIM</h1>
      <div className="float-child-element">
        <div className="content1">
          <p className="fullContent">
            <p className="sonucContent">
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla...
            </p>
          </p>
        </div>
      </div>
      <div className="float-child-element">
        <div className="sonucAnimation">
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      </div>
      <div>
        <h2 className="endeksTabloHeader">CV Endeksi Sonuçları</h2>
        <div className="endeksTablo"><EndeksSonucTable></EndeksSonucTable></div>
      </div>
      <div className="float-child-element">
        <div className="sonucAnimation2">
          <Lottie options={defaultOptions2} height={500} width={500} />
        </div>
      </div>
      <div className="float-child-element">
        <div className="content2">
          <p className="fullContent">
            <p className="sonucContent">
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla...
            </p>
          </p>
        </div>
      </div>
      <div>
        <h2 className="cvTabloHeader">CV Sonuçları</h2>
         <div className="cvTablo"><CVSonucTable></CVSonucTable></div>
      </div>
     
    </div>
  );
}
export default SonucContent;
