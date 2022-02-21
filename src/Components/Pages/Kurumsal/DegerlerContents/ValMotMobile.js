import React from "react";
import "./ValMotMobile.css";
import Lottie from "react-lottie";
import animationData1 from "../motivasyonAnimation.json";
import animationData2 from "../degerlerAnimation.json";

function ValMotMobile(props) {
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
        <div className="motivContentMobile">
            <h1 className="motivasyonHeaderMobile">MOTİVASYONUMUZ</h1>
            <p className="motivFullContent">
            Danışmanlık sürecinde en büyük motivasyonumuz geliştirirken gelişmektir.
            </p>
        </div>
        <div className="motivAnimationMobile">
            <Lottie options={defaultOptionsMotiv} height={400} width={400} />
        </div>
        <div className="valContentMobile">
            <h1 className="valueHeaderMobile">DEĞERLERİMİZ</h1>
            <p className="valFullContent">
            <p className="resOlarak">ResumeShiners olarak;</p>
            <p className="madde">
            <label className="tik">•</label> Alışılagelmişin dışında bir
            eğitim süreci,
            </p>
            <p className="madde">
            <label className="tik">•</label> Özel kurgulanmış etkinlikler ile
            deneyimleyerek geliştirme,
            </p>
            <p className="madde">
            <label className="tik">•</label> Gerçek hayat örneklerinden
            uyarlanmış simülasyonlar aracılığı ile danışanlarımızın kariyer
            basamaklarını emin adımlarla çıkmasını
            </p>
            <p className="resOlarak">hedefliyoruz.</p>
            </p>
            <div className="degerAnimation">
            <Lottie options={defaultOptionsValue} height={450} width={450} />
            </div>
        </div>
    </div>
  );
}

export default ValMotMobile;
