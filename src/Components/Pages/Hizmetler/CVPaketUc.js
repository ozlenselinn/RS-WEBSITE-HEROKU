import React from "react";
import "./CV.css";
import Lottie from "react-lottie";
import cvA3 from "./cv_animation/cv2";

function CVPaketUc(props) {
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: cvA3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
  
    <div className="float-parent-element">
      <div className="float-child-element">
        <div className="cvContent">
        <h2 className="cvHeader">"EĞİTİMLİ ÖZGEÇMİŞİM HAZIR" PAKETİ</h2>
            <p className="paketInfo">
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
            <p className="madde"><label className="tik">✓</label> Özgeçmiş İnceleme</p>
            <p className="madde"><label className="tik">✓</label> Özgeçmiş Düzenleme</p>
            <p className="madde"><label className="tik">✓</label> Sıfırdan Özgeçmiş Hazırlama</p>
            <p className="madde"><label className="tik">✓</label> Yüzyüze Danışmanlık</p>
            <p className="madde"><label className="tik">✓</label> 3 Farklı Şablonda Özgeçmiş’in Sunulması</p>
            <p className="prise">XYZ TL</p>
        </div>
      </div>
      <div className="float-child-element">
      <div className="animation3">
              <Lottie options={defaultOptions3} height={500} width={500} />
            </div>
      </div>
    </div>
      
    
  );

//   returnds2{
// <div className="float-parent-element">
//       <div className="float-child-element">
//         <div className="cvContent">
//         <h2 className="cvHeader">"EĞİTİMLİ ÖZGEÇMİŞİM HAZIR" PAKETİ</h2>
//             <p>
//               “CV Hazırlama Eğitimi” için sizinle birlikte uygun zaman dilimini
//               belirleyeceğiz. Formu doldurup bize göndermenizden itibaren 72
//               saat içerisinde size özgeçmişinizin ilk halini paylaşacağız. Daha
//               sonra, eğitimimizde özgeçmiş oluşturmanın püf noktalarını,
//               özgeçmiş oluştururken sıkça yapılan hataları, bu hataların nasıl
//               düzeltileceğini ve bu konuda en merak edilen soruları
//               cevaplandıracağız. Bu noktada değiştirilmesini, düzeltilmesini
//               istediğiniz noktaları bize söylemekten çekinmeyin. Bizler sizin
//               özgeçmişinizi geliştirmek ve daha kaliteli hizmet sunmak için
//               bekliyor olacağız.
//             </p>
//             <p className="madde"><label className="tik">✓</label> Özgeçmiş İnceleme</p>
//             <p className="madde"><label className="tik">✓</label> Özgeçmiş Düzenleme</p>
//             <p className="madde"><label className="tik">✓</label> Sıfırdan Özgeçmiş Hazırlama</p>
//             <p className="madde"><label className="tik">✓</label> Yüzyüze Danışmanlık</p>
//             <p className="madde"><label className="tik">✓</label> 3 Farklı Şablonda Özgeçmiş’in Sunulması</p>
//         </div>
//       </div>
//       <div className="float-child-element">
//       <div className="animation3">
//               <Lottie options={defaultOptions3} height={500} width={500} />
//             </div>
//       </div>
//     </div>
//   }
}
export default CVPaketUc;
