import React from "react";
import "./ValMotDesktop.css";
import Lottie from "react-lottie";
import animationData1 from "../motivasyonAnimation.json";
import animationData2 from "../degerlerAnimation.json";

function ValMotDesktop(props) {
  const defaultOptionsValue = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsMotiv = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="momDiv">
      <div className="row">
        <div className="float-child-element">
          <div className="motivAnimation">
            <Lottie options={defaultOptionsMotiv} height={450} width={450} />
          </div>
        </div>
        <div className="float-child-element">
          <div className="content2">
            <h1 id="motivasyonHeader">MOTİVASYONUMUZ</h1>
            <p id="motivContent">
              Danışmanlık sürecinde en büyük motivasyonumuz geliştirirken
              gelişmektir.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="float-child-element">
          <div className="content">
            <h1 id="degerHeader">DEĞERLERİMİZ</h1>
            <p id="degerContent">
              <p className="resOlarak">ResumeShiners olarak;</p>
              <p className="madde">
                <label className="tik">•</label> Alışılagelmişin dışında bir
                eğitim süreci,
              </p>
              <p className="madde">
                <label className="tik">•</label> Özel kurgulanmış etkinlikler
                ile deneyimleyerek geliştirme,
              </p>
              <p className="madde">
                <label className="tik">•</label> Gerçek hayat örneklerinden
                uyarlanmış simülasyonlar aracılığı ile danışanlarımızın kariyer
                basamaklarını emin adımlarla çıkmasını
              </p>
              <p className="resOlarak">hedefliyoruz.</p>
            </p>
          </div>
        </div>
        <div className="float-child-element">
          <div className="degerAnimation">
            <Lottie options={defaultOptionsValue} height={450} width={450} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default  ValMotDesktop;
