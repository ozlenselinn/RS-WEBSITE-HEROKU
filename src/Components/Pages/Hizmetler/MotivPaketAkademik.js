import React from "react";
import "./CV.css";
import Lottie from "react-lottie";
import motiv_akademik from "./Motivasyon_Animation/motiv_akademik";

function MotivPaketAkademik(props) {
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: motiv_akademik,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
  
    <div className="float-parent-element">
      <div className="float-child-element">
      <div className="motiv_akademik">
          <Lottie options={defaultOptions2} height={500} width={500} />
        </div>
      </div>
      <div className="float-child-element">
        <div className="cvContent">
        <h2 className="cvHeader">İLERİ SEVİYE AKADEMİK BAŞVURU (SoP - Statement of Purpose) Yazma Eğitimi</h2>
         
          <p className="madde"><label className="tik">✓</label> Ben Kimim </p>
          <p className="madde"><label className="tik">✓</label> Neden Master yapmak istiyorum</p>
          <p className="madde"><label className="tik">✓</label> Neden bunun için en iyi adayım</p>
          <p className="madde"><label className="tik">✓</label> Neden bu üniversiteyi seçtim</p>
          <p className="madde"><label className="tik">✓</label> Kapanış/özet </p>
          <p className="prise">XYZ TL</p>      
        </div>
      </div>
    </div>
  );
}
export default MotivPaketAkademik;
