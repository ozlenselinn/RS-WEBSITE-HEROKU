import React from "react";
import "./CV.css";
import Lottie from "react-lottie";
import interw_YD from "./Mulakat_Animation/interw_YD";

function MulakatPaketSektorelYD(props) {
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: interw_YD,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
 
    <div className="float-parent-element">
      <div className="float-child-element">
        <div className="cvContent">
        <h2 className="cvHeader">“SEKTOREL YABANCI DİL MÜLAKATINA HAZIRLIK” PAKETİ</h2>
            <p className="paketInfo">
            Bu paket, Sektörel İK Mülakatı aşamasında firmanın işe alım sorumluları tarafından belirli bir yabancı dilin yetkinliğinin sınandığı mülakatı simüle eder. 
            Adayın bahsi geçen yabancı dildeki bilgi seviyesini ve kendini ifade ediş biçimini sorgulamak üzere yazılı ve/veya sözlü olarak gerçekleştirilir.
            </p>
            <p className="madde"><label className="tik">✓</label> Yurt içi ve Yurt dışı başvurularının klasikleşen yabancı dil mülakatı simülasyonu</p>
            <p className="madde"><label className="tik">✓</label> İngilizce ve/veya Almanca dil seçeneği</p>
            <p className="madde"><label className="tik">✓</label> Geri bildirim + Yabancı dil mülakatı dinamikleri eğitimi</p>
            <p className="prise">XYZ TL</p>
        </div>
      </div>
      <div className="float-child-element">
      <div className="interw_YD">
              <Lottie options={defaultOptions3} height={500} width={500} />
            </div>
      </div>
    </div>
      
    
  );


}
export default MulakatPaketSektorelYD;
