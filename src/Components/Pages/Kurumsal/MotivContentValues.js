import React from "react";
import "./DegerlerStyle.css";
import Lottie from "react-lottie";
import animationData from "./degerlerAnimation.json";

function MotivContentValues(props) {
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
        <div className="content">
          <h1 id="degerHeader">DEĞERLERİMİZ</h1>
          <p id="degerContent">
            <p className="resOlarak">ResumeShiners olarak;</p>
            <p className="madde"><label className="tik">•</label> Alışılagelmişin dışında bir eğitim süreci,</p>
            <p className="madde"><label className="tik">•</label> Özel kurgulanmış etkinlikler ile deneyimleyerek geliştirme,</p>
            <p className="madde">
            <label className="tik">•</label> Gerçek hayat örneklerinden uyarlanmış simülasyonlar aracılığı ile
              danışanlarımızın kariyer basamaklarını emin adımlarla çıkmasını
            </p>
            <p className="resOlarak">hedefliyoruz.</p>
          </p>
        </div>
      </div>
      <div className="float-child-element">
        {/* <div className="imageDeger">
          <img id="deger" src="/kurumsalImages/deger.jpg" alt=""></img>
        </div> */}
        <div className="degerAnimation">
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      </div>
    </div>
  );
}
export default MotivContentValues;
