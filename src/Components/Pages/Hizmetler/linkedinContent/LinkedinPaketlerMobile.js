import React from "react";
import Lottie from "react-lottie";
import animationLinkedin from "./linkedinAnimation/linkedin-logo.json";
import "./LinkedinMobile.css";

function LinkedinPaketlerMobile(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLinkedin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="momDivLM">
      <div className="row">
          <div className="linkedinContentM">
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
                <label className="tik">✓</label>Anahtar kelime aramalarında sizi ön plana çıkartacak hakkımda yazısının yazılması
              </p>
              <p className="madde">
                <label className="tik">✓</label>Profilinizin gerekli
                başlıklarının oluşturulması (Eğitim, Deneyim, Gönüllü Çalışma,
                Lisanslar ve Sertifikalar, Başarılar vb.)
              </p>
              <p className="madde">
                <label className="tik">✓</label>Yetenek ve Onaylar kısmının
                eklenmesi
              </p>
              <p className="madde">
                <label className="tik">✓</label>LinkedIn Genel Bakış (Bağlantı
                kurma, mesaj gönderme, vb.)
              </p>
              <p className="priseL">175₺</p>
            </p>
          </div>
          </div>
          <div className="row">
          <div className="animationLinkedinM">
            <Lottie options={defaultOptions} height={450} width={450} />
          </div>
        </div>
      </div>

  );
}
export default LinkedinPaketlerMobile;
