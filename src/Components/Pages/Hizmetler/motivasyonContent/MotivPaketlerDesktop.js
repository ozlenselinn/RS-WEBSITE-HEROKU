import React from "react";
import "./MotivDesktop.css";
import Lottie from "react-lottie";
import motiv_akademik from "./Motivasyon_Animation/motiv_akademik";
import motiv_letter from "./Motivasyon_Animation/motiv_letter";

function MotivPaketlerDesktop(props) {
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
    <div className="momDivMotivD">
      <div className="row">
        <div className="float-child-element">
          <div className="coverContent">
            <h2 className="coverHeaderD">COVER LETTER (ÖN YAZI) GENEL EĞİTİMİ</h2>
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
          <div className="motiv_letter">
            <Lottie options={defaultOptions1} height={500} width={500} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="float-child-element">
          <div className="motiv_akademik">
            <Lottie options={defaultOptions2} height={500} width={500} />
          </div>
        </div>
        <div className="float-child-element">
          <div className="sopContent">
            <h2 className="sopHeaderD">
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
export default MotivPaketlerDesktop;
