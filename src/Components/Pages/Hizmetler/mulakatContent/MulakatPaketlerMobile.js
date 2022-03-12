import React from "react";
import Lottie from "react-lottie";
import interw_akademik from "./Mulakat_Animation/interw_akademik.json";
import interw_envanter from "./Mulakat_Animation/interw_envanter";
import interw_IK from "./Mulakat_Animation/interw_IK";
import interw_YD from "./Mulakat_Animation/interw_YD";
import "./MulakatMobile.css";

function MulakatPaketlerMobile(props) {
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: interw_akademik,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: interw_envanter,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: interw_IK,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: interw_YD,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="momDivMobile">
      <div className="row">
        <div className="akademikContentMobile">
          <h2 className="akademikHeader">
            "AKADEMİK MÜLAKATA HAZIRLIK” PAKETİ
          </h2>
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
          <p className="priseM">XYZ TL</p>
        </div>
      </div>
      <div className="row">
        <div className="interw_akademikMobile">
          <Lottie options={defaultOptions1} height={500} width={500} />
        </div>
      </div>
      <div className="row">
        <div className="envanterContentMobile">
          <h2 className="envanterHeader">
            “ENVANTER MÜLAKATINA HAZIRLIK” PAKETİ
          </h2>
          <p className="paketInfo">
            Bu paket, ekranda beliren sorulara verilen yanıtların video
            yardımıyla cevaplanıp sisteme yüklendiği, kısa sorulardan oluşan ve
            bilgisayar ortamında gerçekleşen mülakat tipine sizi tam anlamıyla
            hazırlamak amacı ile kurgulanmıştır.
          </p>
          <p className="madde">
            <label className="tik">✓</label> Klasikleşmiş envanter (bireysel
            olarak gelen soruya video kaydederek cevap verdiğiniz) mülakatları
            simülasyonu
          </p>
          <p className="madde">
            <label className="tik">✓</label> 4 Deneme Sorusu
          </p>
          <p className="madde">
            <label className="tik">✓</label> Geri Bildirim + Sorulara en verimli
            cevabı verme eğitimi
          </p>
          <p className="madde">
            <label className="tik">✓</label> 2 Asıl Soru
          </p>
          <p className="priseM">XYZ TL</p>
        </div>
      </div>
      <div className="row">
        <div className="interw_envanterMobile">
          <Lottie options={defaultOptions2} height={500} width={500} />
        </div>
      </div>
      <div className="row">
        <div className="ikContentMobile">
          <h2 className="ikHeader">“SEKTÖREL İK MÜLAKATINA HAZIRLIK” PAKETİ</h2>
          <p className="paketInfo">
            Bu paket, Sektörel İK Mülakatı aşamasında genellikle firmanın işe
            alım sorumluları ile ilk kez muhatap olduğunuz ve birebir iletişim
            kurma kanalı ile kendinizi ifade ettiğiniz mülakat tipini simüle
            eder. Sorulan sorular genellikle yetkinlikler ve sosyal yetenekler
            üzerindedir.
          </p>
          <p className="madde">
            <label className="tik">✓</label> İşe/Staja alım sürecinin
            klasikleşmiş insan kaynakları mülakatı simülasyonu
          </p>
          <p className="madde">
            <label className="tik">✓</label> 10 dakika yabancı dilde soru cevap
            (Tercihe bağlı)
          </p>
          <p className="madde">
            <label className="tik">✓</label> Geri Bildirim + İK Mülakatı
            dinamikleri eğitimi
          </p>
          <p className="priseM">XYZ TL</p>
        </div>
      </div>
      <div className="row">
        <div className="interw_IKMobile">
          <Lottie options={defaultOptions3} height={500} width={500} />
        </div>
      </div>
      <div className="row">
        <div className="sektorYdContentMobile">
          <h2 className="sektorYdHeader">
            “SEKTOREL YABANCI DİL MÜLAKATINA HAZIRLIK” PAKETİ
          </h2>
          <p className="paketInfo">
            Bu paket, Sektörel İK Mülakatı aşamasında firmanın işe alım
            sorumluları tarafından belirli bir yabancı dilin yetkinliğinin
            sınandığı mülakatı simüle eder. Adayın bahsi geçen yabancı dildeki
            bilgi seviyesini ve kendini ifade ediş biçimini sorgulamak üzere
            yazılı ve/veya sözlü olarak gerçekleştirilir.
          </p>
          <p className="madde">
            <label className="tik">✓</label> Yurt içi ve Yurt dışı
            başvurularının klasikleşen yabancı dil mülakatı simülasyonu
          </p>
          <p className="madde">
            <label className="tik">✓</label> İngilizce ve/veya Almanca dil
            seçeneği
          </p>
          <p className="madde">
            <label className="tik">✓</label> Geri bildirim + Yabancı dil
            mülakatı dinamikleri eğitimi
          </p>
          <p className="priseM">XYZ TL</p>
        </div>
      </div>
      <div className="row">
        <div className="interw_YDMobile">
          <Lottie options={defaultOptions4} height={450} width={450} />
        </div>
      </div>
    </div>
  );
}
export default MulakatPaketlerMobile;
