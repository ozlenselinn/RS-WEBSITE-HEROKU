import React from "react";
import "./Linkedin.css";
import Lottie from "react-lottie";
import animationData from "./linkedinAnimation/linkedin-logo.json";

function LinkedinContent(props) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

  return (
    <div className="float-parent-element">
      <div className="float-child-element">
        <div className="content">
          
          <p id="linkedinContent">
          <h1 id="linkedinHeader">LINKEDIN OPTİMİZASYON PAKETİ</h1>
            <p className="paketInfo">
              LinkedIn profilinizi oluşturmanız için izlemeniz gereken tüm
              adımları interaktif bir şekilde gerçekleştirilecek eğitimde
              dilediğiniz soruyu sorabilirsiniz ve eğitim sonunda LinkedIn
              hesabınız aktif kullanıma hazır olur.
            </p>
            <p className="madde">
              <label className="tik">✓</label>LinkedIn’e ilk bakışın
              oluşturulması (Kişiselleştirilmiş URL, Uygun Profil Fotoğrafı,
              Profil Başlığı)
            </p>
            <p className="madde">
              <label className="tik">✓</label>Anahtar kelime aramalarında (ATS
              miydi?) sizi ön plana çıkartacak hakkımda yazısının yazılması
            </p>
            <p className="madde">
              <label className="tik">✓</label>Profilinizin gerekli başlıklarının
              oluşturulması (Eğitim, Deneyim, Gönüllü Çalışma, Lisanslar ve
              Sertifikalar, Başarılar vb.)
            </p>
            <p className="madde">
              <label className="tik">✓</label>Yetenek ve Onaylar kısmının
              eklenmesi
            </p>
            <p className="madde">
              <label className="tik">✓</label>LinkedIn Genel Bakış (Bağlantı
              kurma, mesaj gönderme, vb.)
            </p>
            <p className="prise">XYZ TL</p>
          </p>
        </div>
      </div>
      <div className="float-child-element">
      <div className="animation">
          <Lottie options={defaultOptions} height={600} width={600} />
        </div>
      </div>
    </div>
  );
}
export default LinkedinContent;
