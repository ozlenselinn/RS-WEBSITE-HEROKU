import React from "react";
import "./EgitimDesktop.css";
import Lottie from "react-lottie";
import egitim1 from "./egitimAnimation/egitim1";
import egitim2 from "./egitimAnimation/egitim2";

function EgitimPaketlerDesktop(props) {

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: egitim1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: egitim2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="momDivEgitimD">
      <div className="row">
        <div className="float-child-element">
          <div className="egitimCoverContentD">
            <h2 className="coverHeader">
              COVER LETTER (ÖN YAZI) GENEL EĞİTİMİ
            </h2>
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
            <a className="goContactD" href="./Contact">
              <input
                id="butonBizeUlasD"
                type="submit"
                value="Detaylı Bilgi Almak İletişime Geçebilirsiniz."
              />
            </a>
          </div>
        </div>
        <div className="float-child-element">
          <div className="egitim1D">
            <Lottie options={defaultOptions1} height={500} width={500} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="float-child-element">
          <div className="egitim2D">
            <Lottie options={defaultOptions2} height={500} width={500} />
          </div>
        </div>
        <div className="float-child-element">
          <div className="egitimsopContentD">
            <h2 className="sopHeader">
              İLERİ SEVİYE AKADEMİK BAŞVURU (SoP - Statement of Purpose) YAZMA
              EĞİTİMİ
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
            <a className="goContactD" href="./Contact">
              <input
                id="butonBizeUlasD"
                type="submit"
                value="Detaylı Bilgi Almak İletişime Geçebilirsiniz."
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EgitimPaketlerDesktop;
