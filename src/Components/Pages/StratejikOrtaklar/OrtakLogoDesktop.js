import React from "react";
import "./OrtakDesktop.css";

function OrtakLogoDesktop(props) {

  return (
    <div className="momDivOrtakD">
      <h1 className="ortakHeader">STRATEJİK ORTAKLARIMIZ VE PARTNERLERİMİZ</h1>
      <p className="ortakContentDesktop">
        ResumeShiners artık senin de üniversitende! Üniversitelerin önde gelen
        öğrenci topluluklarıyla kurduğumuz stratejik partnerlikler kapsamında;
        etkinliklere konuşmacı olarak katılıyor, sizlere eğitimler verme
        fırsatı yakalıyoruz. Sen de etkinliklerin fuaye alanındaki standımıza
        uğrayabilir, ResumeShiners ile kariyer yolundaki önemli adımların
        hakkında bilgi alabilirsin.
      </p>

      <h2 className="ogrenciHeader">ÖĞRENCİ TOPLULUĞU PARTNERLERİMİZ</h2>

      <div className="logoDiv">
        <div className="row">
          <div className="column">
            <img className="logos" src="/partnerlerImages/tmb.jpeg" alt=""></img>
            <p className="logoNameD">
              TMMOB Gıda Mühendisleri Odası ODTÜ Öğrenci Temsilciliği
            </p>
          </div>

          <div className="columnYeditepe">
            <img className="logos" src="/partnerlerImages/Yeditepe LGK.png" alt=""></img>

            <p className="logoNameYeditepeD">
              Yeditepe Üniversitesi Liderlik ve Girişimcilik Kulübü
            </p>
          </div>
          <div className="column">
            <img className="logos" src="/partnerlerImages/gdsc.png" alt=""></img>

            <p className="logoNameD">ODTÜ Google Developer Student Clubs</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img className="logos" src="/partnerlerImages/gsu.png" alt=""></img>

            <p className="logoNameD">
              Galatsaray Üniversitesi Women In Business
            </p>
          </div>
          <div className="column">
            <img className="logos" src="/partnerlerImages/ggt.png" alt=""></img>

            <p className="logoNameD">ODTÜ Genç Girişimciler Topluluğu</p>

          </div>

          <div className="column">
            <img className="logos" src="/partnerlerImages/bigg.png" alt=""></img>

            <p className="logoNameD">Bilgili Girişimciler Kulübü</p>

          </div>
        </div>
        <div className="row">
          <div className="column">
            <img className="logos" src="/partnerlerImages/Yeditepe Finans.png" alt=""></img>

            <p className="logoNameYeditepeFinansD">Yeditepe Üniversitesi Finans Kulübü</p>

          </div>
          <div className="column">
            <img className="logos" src="/partnerlerImages/vm.png" alt=""></img>

            <p className="logoNameD">Vizyondan Misyona</p>

          </div>
          <div className="column">
            <img className="logos" src="/partnerlerImages/uludag.png" alt=""></img>

            <p className="logoNameD">
              Bursa Uludağ Üniversitesi Elektrik Elektronik Mühendisliği
              Bölümü
            </p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img className="logos" src="/partnerlerImages/su.png" alt=""></img>

            <p className="logoNameD">Sakarya Üniversitesi IEEE Öğrenci Kolu</p>

          </div>
          <div className="column">
            <img className="logos" src="/partnerlerImages/iytu.png" alt=""></img>

            <p className="logoNameD">
            İzmir Yüksek Teknoloji Enstitüsü IEEE Öğrenci Kolu
          </p>
          </div>
          <div className="column">            
          <img className="logos" src="/partnerlerImages/ieee gazi.png" alt=""></img>

            <p className="logoNameD">Gazi Üniversitesi IEEE Öğrenci Kolu</p>
          </div>
        </div>
      </div>
  </div>
  );
}
export default OrtakLogoDesktop;
