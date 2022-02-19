import React from "react";
import "./CV.css";
import Lottie from "react-lottie";
import cvA4 from "./cv_animation/cv4";


function CVPaketBir(props) {
 
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: cvA4,
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
              "EĞİTİMLİ ÖZGEÇMİŞ GERİ BİLDİRİM" PAKETİ
            </h2>
            <p className="paketInfo">
              Bu paket kapsamında danışman ekibimiz sizin özgeçmişinizi
              inceleyerek yapıcı geri bildirimler verir. Özgeçmişinizi oluşturma
              sırasında yaptığınız doğruları, farkında olmadan yaptığınız
              hataları ve bu hataların nasıl düzeltileceğine dair vereceğimiz
              geri bildirimler ile kariyer yolculuğunuzda fark yaratmanızı
              istiyoruz.
            </p>
            <p className="madde">
              <label className="tik">✓</label> Özgeçmiş İnceleme
            </p>
            <p className="madde">
              <label className="tik">✓</label> Sözlü Feedback
            </p>
            <p className="madde">
              <label className="tik">✓</label> Yüzyüze Danışmanlık (1 saat)
            </p>
            <p className="prise">XYZ TL</p>
          </div>
        </div>
        <div className="float-child-element">
          <div className="animation1">
            <Lottie options={defaultOptions1} height={500} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CVPaketBir;
