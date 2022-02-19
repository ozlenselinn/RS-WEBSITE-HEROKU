import React from "react";
import SiparislerimTable from "./SiparislerimTable";
import "./SiparislerimStyle.css";
import Lottie from "react-lottie";
import animationData from "./SiparislerimAnimation.json";




function SiparislerimContent(props) {
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
       <h1 id="siparisHeader">SİPARİŞLERİM</h1>
      <div className="float-child-element">
        <div className="content1">
          <p className="fullContent">
            <p className="siparisContent">
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
        <div className="SiparislerimAnimation">
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      </div>
      <div>
        <h2 className="endeksTabloHeader">Satın Aldığım Hizmetler</h2>
        <div className="endeksTablo"><SiparislerimTable></SiparislerimTable></div>
      </div>
      
     
    </div>
  );
}
export default SiparislerimContent;
