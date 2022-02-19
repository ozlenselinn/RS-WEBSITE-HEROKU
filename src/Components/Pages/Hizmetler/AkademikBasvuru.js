import React from "react";
import "./Egitim.css";
import Lottie from "react-lottie";
import  animationData from "./egitimAnimation/egitim2";

function AkademikBasvuru(props) {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData:  animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className="float-parent-element">
        <div className="float-child-element">
          <div className="animationEgitim2">
            <Lottie options={defaultOptions1} height={470} width={470} />
          </div>
        </div>
        <div className="float-child-element">
          <div className="egitimContent">
            <h2 className="egitimHeader">
              İLERİ SEVİYE AKADEMİK BAŞVURU (SoP -STATEMENT OF PURPOSE) YAZMA EĞİTİMİ
            </h2>
            <p className="madde">
              <label className="tik">✓</label>Ben Kimim yazısının yazılması
            </p>
            <p className="madde">
              <label className="tik">✓</label>Neden Master yapmak istiyorum
              yazısının yazılması
            </p>
            <p className="madde"><label className="tik">✓</label>
              Neden bunun için en iyi adayım yazısının yazılması
            </p>
            <p className="madde">
              <label className="tik">✓</label>Neden bu üniversiteyi seçtim
              yazısının yazılması
            </p>
            <p className="madde">
              <label className="tik">✓</label>Kapanış/özet yazısının yazılması
            </p>
            <p className="prise">XYZ TL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AkademikBasvuru;
