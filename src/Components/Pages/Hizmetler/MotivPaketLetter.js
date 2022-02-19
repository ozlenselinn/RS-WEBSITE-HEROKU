import React from "react";
import "./CV.css";
import Lottie from "react-lottie";
import motiv_letter from "./Motivasyon_Animation/motiv_letter.json";
import MotivPaketAkademik from "./MotivPaketAkademik";


function MotivPaketLetter(props) {
 
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: motiv_letter,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return ( 
    <div>
      <div className="float-parent-element">
        <div className="float-child-element">
          <div className="cvContent">
            <h2 className="cvHeader">
            COVER LETTER (ÖN YAZI) GENEL EĞİTİMİ
            </h2>
            <p className="madde">
              <label className="tik">✓</label> Ben Kimim yazısının yazılması 
            </p>
            <p className="madde">
              <label className="tik">✓</label> Neden Master yapmak istiyorum yazısının yazılması
            </p>
            <p className="madde">
              <label className="tik">✓</label> Neden bunun için en iyi adayım yazısının yazılması
            </p>
            <p className="madde">
              <label className="tik">✓</label> Neden bu üniversiteyi seçtim yazısının yazılması
            </p>
            <p className="madde">
              <label className="tik">✓</label> Kapanış/özet yazısının yazılması
            </p>
          
            <p className="prise">XYZ TL</p>
          </div>
        </div>
        <div className="float-child-element">
          <div className="motiv_letter">
            <Lottie options={defaultOptions1} height={500} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MotivPaketLetter;
