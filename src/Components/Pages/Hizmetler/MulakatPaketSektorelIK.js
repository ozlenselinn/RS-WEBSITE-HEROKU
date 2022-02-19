import React from "react";
import "./CV.css";
import Lottie from "react-lottie";
import interw_IK from "./Mulakat_Animation/interw_IK";

function MulakatPaketSektorelIK(props) {
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: interw_IK,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
  
    <div className="float-parent-element">
      <div className="float-child-element">
      <div className="interw_IK">
          <Lottie options={defaultOptions2} height={500} width={500} />
        </div>
      </div>
      <div className="float-child-element">
        <div className="cvContent">
        <h2 className="cvHeader">“SEKTÖREL İK MÜLAKATINA HAZIRLIK” PAKETİ</h2>
          <p className="paketInfo">
          Bu paket, Sektörel İK Mülakatı aşamasında genellikle firmanın işe alım sorumluları ile ilk kez muhatap olduğunuz ve 
          birebir iletişim kurma kanalı ile kendinizi ifade ettiğiniz mülakat tipini simüle eder. 
          Sorulan sorular genellikle yetkinlikler ve sosyal yetenekler üzerindedir.
          </p>
          <p className="madde"><label className="tik">✓</label> İşe/Staja alım sürecinin klasikleşmiş insan kaynakları mülakatı simülasyonu</p>
          <p className="madde"><label className="tik">✓</label> 10 dakika yabancı dilde soru cevap (Tercihe bağlı)</p>
          <p className="madde"><label className="tik">✓</label> Geri Bildirim + İK Mülakatı dinamikleri eğitimi</p>
          <p className="prise">XYZ TL</p>      
        </div>
      </div>
    </div>
  );
}
export default MulakatPaketSektorelIK;
