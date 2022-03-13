import React from "react";
import "./cvMobile.css";
import "./cvDesktop.css";
import Lottie from "react-lottie";
import cvA4 from "./cv_animation/cv4";
import cvA2 from "./cv_animation/cv3";
import cvA3 from "./cv_animation/cv2";

function CVPaketlerMobile(props) {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: cvA4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: cvA2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: cvA3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="momDivM">
      <div className="row">
        <div className="animation1M">
          <Lottie options={defaultOptions1} height={500} width={500} />
        </div>

        <div className="cvContent1M">
          <h2 className="cvHeader">"EĞİTİMLİ ÖZGEÇMİŞ GERİ BİLDİRİM" PAKETİ</h2>
          <p className="paketInfo">
            Bu paket kapsamında danışman ekibimiz sizin özgeçmişinizi
            inceleyerek yapıcı geri bildirimler verir. Özgeçmişinizi oluşturma
            sırasında yaptığınız doğruları, farkında olmadan yaptığınız hataları
            ve bu hataların nasıl düzeltileceğine dair vereceğimiz geri
            bildirimler ile kariyer yolculuğunuzda fark yaratmanızı istiyoruz.
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

      <div className="row">
      <div className="animation2M">
          <Lottie options={defaultOptions2} height={500} width={500} />
        </div>
        <div className="cvContent2M">
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
          <p className="madde">
            <label className="tik">✓</label> Özgeçmiş İnceleme
          </p>
          <p className="madde">
            <label className="tik">✓</label> Özgeçmiş Düzenleme
          </p>
          <p className="madde">
            <label className="tik">✓</label> Sıfırdan Özgeçmiş Hazırlama
          </p>
          <p className="madde">
            <del>
              <label className="tik">✓</label> Yüzyüze Danışmanlık
            </del>
          </p>
          <p className="madde">
            <label className="tik">✓</label> 3 Farklı Şablonda Özgeçmiş’in
            Sunulması
          </p>
          <p className="prise">XYZ TL</p>
        </div>
        
      </div>

      <div className="row">
        <div className="animation3M">
          <Lottie options={defaultOptions3} height={500} width={500} />
        </div>
      </div>
      <div className="cvContent3M">
        <h2 className="cvHeader">"EĞİTİMLİ ÖZGEÇMİŞİM HAZIR" PAKETİ</h2>
        <p className="paketInfo">
          “CV Hazırlama Eğitimi” için sizinle birlikte uygun zaman dilimini
          belirleyeceğiz. Formu doldurup bize göndermenizden itibaren 72 saat
          içerisinde size özgeçmişinizin ilk halini paylaşacağız. Daha sonra,
          eğitimimizde özgeçmiş oluşturmanın püf noktalarını, özgeçmiş
          oluştururken sıkça yapılan hataları, bu hataların nasıl
          düzeltileceğini ve bu konuda en merak edilen soruları
          cevaplandıracağız. Bu noktada değiştirilmesini, düzeltilmesini
          istediğiniz noktaları bize söylemekten çekinmeyin. Bizler sizin
          özgeçmişinizi geliştirmek ve daha kaliteli hizmet sunmak için bekliyor
          olacağız.
        </p>
        <p className="madde">
          <label className="tik">✓</label> Özgeçmiş İnceleme
        </p>
        <p className="madde">
          <label className="tik">✓</label> Özgeçmiş Düzenleme
        </p>
        <p className="madde">
          <label className="tik">✓</label> Sıfırdan Özgeçmiş Hazırlama
        </p>
        <p className="madde">
          <label className="tik">✓</label> Yüzyüze Danışmanlık
        </p>
        <p className="madde">
          <label className="tik">✓</label> 3 Farklı Şablonda Özgeçmiş’in
          Sunulması
        </p>
        <p className="prise">XYZ TL</p>
      </div>
    </div>
  );
}
export default CVPaketlerMobile;
