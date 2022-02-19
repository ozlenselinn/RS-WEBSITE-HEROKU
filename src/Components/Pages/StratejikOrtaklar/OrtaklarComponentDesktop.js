import React from "react";
import "./OrtakDesktop.css";
import ImageHoverShadow from "./imageHoverShadow";

function OrtaklarComponent(props) {
  return (
    <div className="momDiv">
      <div className="cerceveDesktop">
        <h1 id="ortakHeader">STRATEJİK ORTAKLARIMIZ VE PARTNERLERİMİZ</h1>
        <p className="ortakContentDesktop">
          ResumeShiners artık senin de üniversitende! Üniversitelerin önde gelen
          öğrenci topluluklarıyla kurduğumuz stratejik partnerlikler kapsamında;
          etkinliklere konuşmacı olarak katılıyor, sizlere eğitimler verme
          fırsatı yakalıyoruz. Sen de etkinliklerin fuaye alanındaki standımıza
          uğrayabilir, ResumeShiners ile kariyer yolundaki önemli adımların
          hakkında bilgi alabilirsin.
        </p>

        <h2 id="ogrenciHeader">ÖĞRENCİ TOPLULUĞU PARTNERLERİMİZ</h2>

        <div className="logoDiv">
          <div class="row">
            <div className="column">
              <ImageHoverShadow imagePath="/partnerlerImages/tmb.jpeg" />
              <p className="logoName">
                TMMOB Gıda Mühendisleri Odası ODTÜ Öğrenci Temsilciliği
              </p>
            </div>

            <div className="columnYeditepe">
              <ImageHoverShadow imagePath="/partnerlerImages/Yeditepe LGK.png" />
              <p className="logoNameYeditepe">
                Yeditepe Üniversitesi Liderlik ve Girişimcilik Kulübü
              </p>
            </div>
            <div className="column">
              <ImageHoverShadow imagePath="/partnerlerImages/gdsc.png" />
              <p className="logoName">ODTÜ Google Developer Student Clubs</p>
            </div>
          </div>
          {/* <div class="row">
            <div className="column">
              <p className="logoName">
                TMMOB Gıda Mühendisleri Odası ODTÜ Öğrenci Temsilciliği
              </p>
            </div>

            <div className="column">
              <p className="logoName">
                Yeditepe Üniversitesi Liderlik ve Girişimcilik Kulübü
              </p>
            </div>
            <div className="column">
              <p className="logoName">ODTÜ Google Developer Student Clubs</p>
            </div>
          </div> */}
          <div class="row">
            <div className="column">
              <ImageHoverShadow imagePath="/partnerlerImages/gsu.png " />
              <p className="logoName">
                Galatsaray Üniversitesi Women In Business
              </p>
            </div>
            <div className="column">
              <ImageHoverShadow imagePath="/partnerlerImages/ggt.png" />
              <p className="logoName">ODTÜ Genç Girişimciler Topluluğu</p>

            </div>

            <div className="column">
              <ImageHoverShadow imagePath="/partnerlerImages/bigg.png" />
              <p className="logoName">Bilgili Girişimciler Kulübü</p>

            </div>
          </div>
          {/* <div class="row">
            <div className="column">
              <p className="logoName">
                Galatsaray Üniversitesi Women In Business
              </p>
            </div>
            <div className="column">
              <p className="logoName">ODTÜ Genç Girişimciler Topluluğu</p>
            </div>

            <div className="column">
              <p className="logoName">Bilgili Girişimciler Kulübü</p>
            </div>
          </div> */}
          <div class="row">
            <div className="column">
              <ImageHoverShadow imagePath="/partnerlerImages/Yeditepe Finans.png " />
              <p className="logoNameYeditepeFinans">Yeditepe Üniversitesi Finans Kulübü</p>

            </div>
            <div className="column">
              <ImageHoverShadow imagePath="/partnerlerImages/vm.png" />
              <p className="logoName">Vizyondan Misyona</p>

            </div>
            <div className="column">
              <ImageHoverShadow imagePath="/partnerlerImages/uludag.png" />
              <p className="logoName">
                Bursa Uludağ Üniversitesi Elektrik Elektronik Mühendisliği
                Bölümü
              </p>
            </div>
          </div>
          {/* <div class="row">
            <div className="column">
              <p className="logoName">Yeditepe Üniversitesi Finans Kulübü</p>
            </div>
            <div className="column">
              <p className="logoName">Vizyondan Misyona</p>
            </div>
            <div className="column">
              <p className="logoName">
                Bursa Uludağ Üniversitesi Elektrik Elektronik Mühendisliği
                Bölümü
              </p>
            </div>
          </div> */}
          <div class="row">
            <div className="column">
              <ImageHoverShadow imagePath="/partnerlerImages/su.png" />
              <p className="logoName">Sakarya Üniversitesi IEEE Öğrenci Kolu</p>

            </div>
            <div className="column">
              <ImageHoverShadow imagePath="/partnerlerImages/iytu.png" />
              <p className="logoName">
              İzmir Yüksek Teknoloji Enstitüsü IEEE Öğrenci Kolu
            </p>
            </div>
            <div className="column">
              <ImageHoverShadow imagePath="/partnerlerImages/ieee gazi.png" />
              <p className="logoName">Gazi Üniversitesi IEEE Öğrenci Kolu</p>
            </div>
          </div>
        </div>
        {/* <div class="row">
          <div className="column">
            <p className="logoName">Sakarya Üniversitesi IEEE Öğrenci Kolu</p>
          </div>
          <div className="column">
            <p className="logoName">
              İzmir Yüksek Teknoloji Enstitüsü IEEE Öğrenci Kolu
            </p>
          </div>
          <div className="column">
            <p className="logoName">Gazi Üniversitesi IEEE Öğrenci Kolu</p>
          </div>
        </div>*/}
      </div> 
      <h2 id="sirketHeader">KURUMSAL ŞİRKET PARTNERLERİMİZ</h2>
    </div>
  );
}
export default OrtaklarComponent;
