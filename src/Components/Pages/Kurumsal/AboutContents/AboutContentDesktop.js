import React from "react";
import "./AboutUsDesktop.css";
import Lottie from "react-lottie";
import animationData from "../aboutus.json";

function AboutContentDesktop(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="momDivAboutDesktop">
      <div className="row">
        <div className="float-child-element">
          <div className="content">
            <h1 id="hakkimizdaHeader">HAKKIMIZDA</h1>
            <p className="fullContent">
              <p className="aboutContent">
                ResumeShiners, 3 ODTÜ mezunu tarafından lisans dönemindeki en
                temel problemlerden birisi olan iş/staj bulma, yüksek
                lisans/doktora sürecini yönetme ve başvurulardan kabul alma
                aşamalarında öğrencilere yardımcı olmak ve bu süreci onlar için
                kolaylaştırmak amacıyla kurulmuş bir danışmanlık girişimidir.
              </p>
              <p className="aboutContent">
                Bizler, başvuru süreçlerinin en önemli adımları olan özgeçmiş
                hazırlama, niyet mektubu hazırlama, mülakat performansını
                geliştirme gibi konularda içerikler üreten, eğitimler oluşturan
                ve bu konularda danışmanlıklar ve geri bildirimler sağlayan bir
                girişim olarak bir yılı aşkın süredir sizin yanınızdayız.
              </p>
              <p className="aboutContent">
                ResumeShiners ile birlikte başvurunuzu güçlendirme ve
                kolaylaştırma fırsatı bulacak, pek çok lisans öğrencisinin en
                büyük korkularından birisi olan ilk staj/iş/yüksek lisans
                başvurularında yanınızda bir destekçi olarak tecrübeli bir ekibi
                görme şansına sahip olacaksınız.
              </p>
            </p>
          </div>
        </div>
        <div className="float-child-element">
          <div className="aboutAnimation">
            <Lottie options={defaultOptions} height={500} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContentDesktop;
