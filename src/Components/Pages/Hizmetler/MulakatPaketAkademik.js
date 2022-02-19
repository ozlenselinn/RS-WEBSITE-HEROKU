import React from "react";
import "./CV.css";
import Lottie from "react-lottie";
import interw_akademik from "./Mulakat_Animation/interw_akademik.json";

function MulakatPaketAkademik(props) {
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: interw_akademik,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="float-parent-element">
      <div className="float-child-element">
        <div className="interw_akademik">
          <Lottie options={defaultOptions3} height={500} width={500} />
        </div>
      </div>
      <div className="float-child-element">
        <div className="cvContent">
          <h2 className="cvHeader">"AKADEMİK MÜLAKATA HAZIRLIK” PAKETİ</h2>
          <p className="paketInfo">
            Bu paketi, yurt içi ve özellikle yurt dışı Yüksek Lisans / Doktora
            programlarına başvuru sürecinde deneyimlenen mülakat tipini simüle
            eder. Genellikle online ortamda gerçekleştirilir. Başvurulan daldaki
            öğretim görevlileri ve bölüm heyeti görüşmeyi gerçekleştirir.
            Mülakat sırasında teknik sorular da sorulabilir.
          </p>
          <p className="madde">
            <label className="tik">✓</label>Yurt içi & Yurt dışı yüksek lisans
            ve doktora başvurularının akademik mülakat simülasyonu
          </p>
          <p className="madde">
            <label className="tik">✓</label> Türkçe, İngilizce ve/veya Almanca
            dil seçeneği
          </p>
          <p className="madde">
            <label className="tik">✓</label> Geri bildirim + Akademik mülakat
            dinamikleri eğitimi
          </p>
          <p className="prise">XYZ TL</p>
        </div>
      </div>
    </div>
  );
}
export default MulakatPaketAkademik;
