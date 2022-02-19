import React from "react";
import "./CV.css";
import Lottie from "react-lottie";
import cvA2 from "./cv_animation/cv3";

function CVPaketIki(props) {
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: cvA2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="float-parent-element">
      <div className="float-child-element">
      <div className="animation2">
          <Lottie options={defaultOptions2} height={500} width={500} />
        </div>
      </div>
      <div className="float-child-element">
        <div className="cvContent">
        <h2 className="cvHeader">"ÖZGEÇMİŞİM HAZIR" STANDART PAKETİ</h2>
          <p className="paketInfo">
            Bu paket kapsamında danışman ekibimiz sizden özgeçmişinize koymanız
            gereken bilgileri öğrenmemiz için bir formu doldurmanızı isteyecek.
            Bu formu doldururken size yol göstermesi için hazırlanmış bir örnek
            formu da sizinle paylaşacağız. Danışman ekibimiz, formdaki
            bilgilerden yola çıkarak sizin için en iyi özgeçmişi hazırlayıp 72
            saat içerisinde size özgeçmişinizin ilk halini iletecek. Bu noktada
            değiştirilmesini, düzeltilmesini istediğiniz noktaları bize
            söylemekten çekinmeyin. Bizler sizin özgeçmişinizi geliştirmek ve
            daha kaliteli hizmet sunmak için bekliyor olacağız.
          </p>
          <p className="madde"><label className="tik">✓</label> Özgeçmiş İnceleme</p>
          <p className="madde"><label className="tik">✓</label> Özgeçmiş Düzenleme</p>
          <p className="madde"><label className="tik">✓</label> Sıfırdan Özgeçmiş Hazırlama</p>
          <p className="madde">
            <del><label className="tik">✓</label> Yüzyüze Danışmanlık</del>
          </p>
          <p className="madde"><label className="tik">✓</label> 3 Farklı Şablonda Özgeçmiş’in Sunulması</p>
          <p className="prise">XYZ TL</p>
        </div>
      </div>
    </div>
  );
}
export default CVPaketIki;
