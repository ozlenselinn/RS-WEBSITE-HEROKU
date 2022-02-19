import React from "react";
import "./CV.css";
import Lottie from "react-lottie";
import interw_envanter from "./Mulakat_Animation/interw_envanter";

function MulakatPaketEnvanter(props) {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: interw_envanter,
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
            “ENVANTER MÜLAKATINA HAZIRLIK” PAKETİ
            </h2>
            <p className="paketInfo">
            Bu paket, ekranda beliren sorulara verilen yanıtların video yardımıyla cevaplanıp sisteme yüklendiği, 
            kısa sorulardan oluşan ve bilgisayar ortamında gerçekleşen mülakat tipine sizi tam anlamıyla hazırlamak 
            amacı ile kurgulanmıştır.
            </p>
            <p className="madde">
              <label className="tik">✓</label> Klasikleşmiş envanter (bireysel olarak gelen soruya video kaydederek 
              cevap verdiğiniz) mülakatları simülasyonu
            </p>
            <p className="madde">
              <label className="tik">✓</label> 4 Deneme Sorusu
            </p>
            <p className="madde">
              <label className="tik">✓</label> Geri Bildirim + Sorulara en verimli cevabı verme eğitimi
            </p>
            <p className="madde">
              <label className="tik">✓</label> 2 Asıl Soru
            </p>
            <p className="prise">XYZ TL</p>
          </div>
        </div>
        <div className="float-child-element">
          <div className="interw_envanter">
            <Lottie options={defaultOptions1} height={500} width={500} />
          </div>
        </div>
      </div>
    </div>
  );

}
export default MulakatPaketEnvanter;
