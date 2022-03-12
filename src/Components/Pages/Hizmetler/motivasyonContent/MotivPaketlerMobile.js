import React from "react";
import "./MotivMobile.css";
import Lottie from "react-lottie";
import motiv_akademik from "./Motivasyon_Animation/motiv_akademik";
import motiv_letter from "./Motivasyon_Animation/motiv_letter";

function MotivPaketlerMobile(props) {
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: motiv_akademik,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: motiv_letter,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="momDivMotivM">
      <div className="row">
        <div className="coverContentM">
          <h2 className="coverHeader">COVER LETTER (ÖN YAZI) GENEL EĞİTİMİ</h2>
          <p className="madde">
            <label className="tik">✓</label> Ben Kimim yazısının yazılması
          </p>
          <p className="madde">
            <label className="tik">✓</label> Neden Master yapmak istiyorum
            yazısının yazılması
          </p>
          <p className="madde">
            <label className="tik">✓</label> Neden bunun için en iyi adayım
            yazısının yazılması
          </p>
          <p className="madde">
            <label className="tik">✓</label> Neden bu üniversiteyi seçtim
            yazısının yazılması
          </p>
          <p className="madde">
            <label className="tik">✓</label> Kapanış/özet yazısının yazılması
          </p>

          <p className="priseMotiv">XYZ TL</p>
        </div>
      </div>
      <div className="row">
        <div className="motiv_letterM">
          <Lottie options={defaultOptions1} height={500} width={500} />
        </div>
      </div>
      <div className="row">
        <div className="sopContentM">
          <h2 className="sopHeader">
            İLERİ SEVİYE AKADEMİK BAŞVURU (SoP - Statement of Purpose) YAZMA EĞİTİMİ
          </h2>

          <p className="madde">
            <label className="tik">✓</label> Ben Kimim{" "}
          </p>
          <p className="madde">
            <label className="tik">✓</label> Neden Master yapmak istiyorum
          </p>
          <p className="madde">
            <label className="tik">✓</label> Neden bunun için en iyi adayım
          </p>
          <p className="madde">
            <label className="tik">✓</label> Neden bu üniversiteyi seçtim
          </p>
          <p className="madde">
            <label className="tik">✓</label> Kapanış/özet{" "}
          </p>
          <p className="priseMotiv">XYZ TL</p>
        </div>
      </div>
      <div className="row">
        <div className="motiv_akademikM">
          <Lottie options={defaultOptions2} height={450} width={450} />
        </div>
      </div>
      
    </div>
  );
}
export default MotivPaketlerMobile;
