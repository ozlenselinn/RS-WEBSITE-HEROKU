import React from "react";
import "./EgitimMobile.css";
import Lottie from "react-lottie";
import egitim1 from "./egitimAnimation/egitim1";
import egitim2 from "./egitimAnimation/egitim2";

function EgitimPaketlerMobile(props) {
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: egitim1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: egitim2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="momDivEgitimM">
      <div className="row">
        <div className="coverEgitimContentM">
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

          <p className="priseEgitim">XYZ TL</p>
        </div>
      </div>
      <div className="row">
        <div className="egitim1M">
          <Lottie options={defaultOptions1} height={500} width={500} />
        </div>
      </div>
      <div className="row">
        <div className="sopEgitimContentM">
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
          <p className="priseEgitim">XYZ TL</p>
        </div>
      </div>
      <div className="row">
        <div className="egitim2M">
          <Lottie options={defaultOptions2} height={450} width={450} />
        </div>
      </div>
    </div>
  );
}
export default EgitimPaketlerMobile;
