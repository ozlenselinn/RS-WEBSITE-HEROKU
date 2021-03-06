import React from "react";
import "./CV.css";
import Lottie from "react-lottie";
import interw_envanter from "./Mulakat_Animation/interw_envanter";
import interw_IK from "./Mulakat_Animation/interw_IK";
import interw_YD from "./Mulakat_Animation/interw_YD";
import interw_akademik from "./Mulakat_Animation/interw_akademik";

function MulakatContent(props) {
 
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
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: interw_YD,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: interw_akademik,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="float-parent-element">
      <h1 id="momHeader">ÖZGEÇMİŞ HİZMETLERİ</h1>
      <body class="container-fluid">
        <div className="row">
          <h2 className="cvHeader">
            "EĞİTİMLİ ÖZGEÇMİŞ GERİ BİLDİRİM" PAKETİ
          </h2>
          <div className="animation">
          <Lottie options={defaultOptions1} height={350} width={350} />
        </div>
          <div className="cvContent">
            <p>
              Bu paket kapsamında danışman ekibimiz sizin özgeçmişinizi
              inceleyerek yapıcı geri bildirimler verir. Özgeçmişinizi oluşturma
              sırasında yaptığınız doğruları, farkında olmadan yaptığınız
              hataları ve bu hataların nasıl düzeltileceğine dair vereceğimiz
              geri bildirimler ile kariyer yolculuğunuzda fark yaratmanızı
              istiyoruz.
            </p>
            <p className="madde">✓ Özgeçmiş İnceleme</p>
            <p className="madde">✓ Sözlü Feedback</p>
            <p className="madde">✓ Yüzyüze Danışmanlık (1 saat)</p>
          </div>
          
        </div>
        <div className="row">
          <h2 className="cvHeader">"ÖZGEÇMİŞİM HAZIR" STANDART PAKETİ</h2>
          <div className="animation">
          <Lottie options={defaultOptions3} height={350} width={350} />
        </div>
          <div className="cvContent">
            <p>
              Bu paket kapsamında danışman ekibimiz sizden özgeçmişinize
              koymanız gereken bilgileri öğrenmemiz için bir formu doldurmanızı
              isteyecek. Bu formu doldururken size yol göstermesi için
              hazırlanmış bir örnek formu da sizinle paylaşacağız. Danışman
              ekibimiz, formdaki bilgilerden yola çıkarak sizin için en iyi
              özgeçmişi hazırlayıp 72 saat içerisinde size özgeçmişinizin ilk
              halini iletecek. Bu noktada değiştirilmesini, düzeltilmesini
              istediğiniz noktaları bize söylemekten çekinmeyin. Bizler sizin
              özgeçmişinizi geliştirmek ve daha kaliteli hizmet sunmak için
              bekliyor olacağız.
            </p>
            <p className="madde">✓ Özgeçmiş İnceleme</p>
            <p className="madde">✓ Özgeçmiş Düzenleme</p>
            <p className="madde">✓ Sıfırdan Özgeçmiş Hazırlama</p>
            <p className="madde">
              <del>✓ Yüzyüze Danışmanlık</del>
            </p>
            <p className="madde">✓ 3 Farklı Şablonda Özgeçmiş’in Sunulması</p>
          </div>
          
        </div>
        <div className="row">
          <h2 className="cvHeader">"EĞİTİMLİ ÖZGEÇMİŞİM HAZIR" PAKETİ</h2>
          <div className="animation">
          <Lottie options={defaultOptions4} height={350} width={350} />
        </div>
        
          <div className="cvContent">
            <p>
              “CV Hazırlama Eğitimi” için sizinle birlikte uygun zaman dilimini
              belirleyeceğiz. Formu doldurup bize göndermenizden itibaren 72
              saat içerisinde size özgeçmişinizin ilk halini paylaşacağız. Daha
              sonra, eğitimimizde özgeçmiş oluşturmanın püf noktalarını,
              özgeçmiş oluştururken sıkça yapılan hataları, bu hataların nasıl
              düzeltileceğini ve bu konuda en merak edilen soruları
              cevaplandıracağız. Bu noktada değiştirilmesini, düzeltilmesini
              istediğiniz noktaları bize söylemekten çekinmeyin. Bizler sizin
              özgeçmişinizi geliştirmek ve daha kaliteli hizmet sunmak için
              bekliyor olacağız.
            </p>
            <p className="madde">✓ Özgeçmiş İnceleme</p>
            <p className="madde">✓ Özgeçmiş Düzenleme</p>
            <p className="madde">✓ Sıfırdan Özgeçmiş Hazırlama</p>
            <p className="madde">✓ Yüzyüze Danışmanlık</p>
            <p className="madde">✓ 3 Farklı Şablonda Özgeçmiş’in Sunulması</p>
          </div>
          <div className="animation">
          <Lottie options={defaultOptions2} height={350} width={350} />
        </div>
        </div>
      </body>
    </div>
  );
}
export default MulakatContent;
