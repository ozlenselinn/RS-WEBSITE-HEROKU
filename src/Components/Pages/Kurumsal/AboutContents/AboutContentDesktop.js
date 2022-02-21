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
    // <div className="aboutDesktopMomDiv">
    //   <div className="float-parent-element">
    //     <div className="float-child-element">
    //       <div className="content">
    //         <h1 id="hakkimizdaHeader">HAKKIMIZDA</h1>
    //         <p className="fullContent">
    //           <p className="aboutContent">
    //             ResumeShiners, 3 ODTÜ öğrencisi tarafından lisans dönemindeki en
    //             temel problemlerden birisi olan iş/staj bulma ve kabul alma
    //             süreçlerinde öğrencilere yardımcı olmak ve bu süreci onlar için
    //             kolaylaştırmak amacıyla kurulmuş bir danışmanlık girişimidir.
    //           </p>
    //           <p className="aboutContent">
    //             Bizler, başvuru süreçlerinin en önemli kısımları olan özgeçmiş
    //             hazırlama, niyet mektubu hazırlama gibi konularda içerikler
    //             üretecek, eğitimler oluşturacak, özgeçmiş konusunda
    //             danışmanlıklar ve geri bildirimler sağlayacak bir girişim olarak
    //             bugün karşınızda bulunmaktayız.
    //           </p>
    //           <p className="aboutContent">
    //             ResumeShiners ile birlikte başvurunuzu güçlendirme ve
    //             kolaylaştırma fırsatı bulacak, pek çok lisans öğrencisinin en
    //             büyük korkularından birisi olan ilk staj/iş başvurularında
    //             yanınızda bir destekçi olarak bizi görme şansına sahip
    //             olacaksınız.
    //           </p>
    //         </p>
    //       </div>
    //     </div>
    //     <div className="float-child-element">
    //       <div className="animation">
    //         <Lottie options={defaultOptions} height={500} width={500} />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="momDivAboutDesktop">
      <div className="row">
        <div className="float-child-element">
          <div className="content">
            <h1 id="hakkimizdaHeader">HAKKIMIZDA</h1>
            <p className="fullContent">
              <p className="aboutContent">
                ResumeShiners, 3 ODTÜ öğrencisi tarafından lisans dönemindeki en
                temel problemlerden birisi olan iş/staj bulma ve kabul alma
                süreçlerinde öğrencilere yardımcı olmak ve bu süreci onlar için
                kolaylaştırmak amacıyla kurulmuş bir danışmanlık girişimidir.
              </p>
              <p className="aboutContent">
                Bizler, başvuru süreçlerinin en önemli kısımları olan özgeçmiş
                hazırlama, niyet mektubu hazırlama gibi konularda içerikler
                üretecek, eğitimler oluşturacak, özgeçmiş konusunda
                danışmanlıklar ve geri bildirimler sağlayacak bir girişim olarak
                bugün karşınızda bulunmaktayız.
              </p>
              <p className="aboutContent">
                ResumeShiners ile birlikte başvurunuzu güçlendirme ve
                kolaylaştırma fırsatı bulacak, pek çok lisans öğrencisinin en
                büyük korkularından birisi olan ilk staj/iş başvurularında
                yanınızda bir destekçi olarak bizi görme şansına sahip
                olacaksınız.
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
