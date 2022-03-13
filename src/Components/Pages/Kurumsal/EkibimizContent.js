import React from "react";
import "./Ekibimiz.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function EkibimizContent(props) {
  return (
    <div class="mom">
      <section class="light">
        <div>
    
        <article class="postcard ligh blue">
            <a class="postcard__img_link" href="#">
            <img
                class="postcard__img"
                src="/kurumsalImages/anilBitmoji.png"
                alt="Image Title"
              />
            </a>
            <div class="postcard__text t-dark">
            <h1 class="postcard__title blue">
              <a href="#">Anıl GÜNEŞ</a>
            </h1>
              <div class="postcard__subtitle small">
              <h2 className="kurucuHeader">Kurucu</h2>
              </div>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
              Merhaba, ben Anıl. ODTÜ Makine Mühendisliği Bölümü mezunuyum ve şu
              anda ODTÜ'de yüksek lisans yapmaktayım. Üniversite hayatım boyunca
              kariyer etkinliklerinin bir parçası olmaktan ve insanları kişisel
              gelişim eğitimleri ile bir araya getirmekten keyif aldım. Sizleri
              CVnizle parlatıp öne çıkartmayı sabırsızlıkla bekliyorum.
              </div>
              <div className="linkedinDiv">
              <a
                href="https://www.linkedin.com/in/anil-gunes/"
                className="linkedinSocial1"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="1.5x" />
              </a>
            </div>
            </div>
          </article>
          <article class="postcard light red">
            <a class="postcard__img_link" href="#">
              <img
                class="postcard__img"
                src="https://picsum.photos/501/500"
                alt="Image Title"
              />
            </a>
            <div class="postcard__text t-dark">
            <h1 class="postcard__title blue">
              <a href="#">Enes CANBOLAT</a>
            </h1>
              <div class="postcard__subtitle small">
              <h2 className="kurucuHeader">Kurucu</h2>

              </div>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
              Merhaba, ben Enes. ODTÜ Elektrik Elektronik Mühendisliği 4.sınıf
              öğrencisiyim. Yeni fikirler üretmeyi, etrafımdaki insanlara
              yardımcı olmayı ve çevremdeki insanların kişisel gelişim
              süreçlerinde onlara katkıda bulunmayı seviyorum. ResumeShiners
              çatısı altında sizlere danışmanlık ve eğitimler vermek için
              sabırsızlanıyorum.
              </div>
              <div className="linkedinDiv">
              <a
                href="https://www.linkedin.com/in/enescanbolat/"
                className="linkedinSocial2"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="1.5x" />
              </a>
            </div>
            </div>
          </article>
          <article class="postcard light green">
            <a class="postcard__img_link" href="#">
              <img
                class="postcard__img"
                src="/kurumsalImages/kelesBitmoji.jpeg"
                alt="Image Title"
              />
            </a>
            <div class="postcard__text t-dark">
              <h1 class="postcard__title green">
              <a href="#">Alperen KELEŞ</a>
              </h1>
              <div class="postcard__subtitle small">
              <h2 className="kurucuHeader">Kurucu</h2>

              </div>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
              Merhaba ben Alperen. Yazı yazmayı, kendimi ve çevremi
              geliştirmeyi, tartışmayı ve uzlaşmayı seviyorum. ODTÜ Bilgisayar
              Mühendisliği 4. sınıf öğrencisiyim. Sizlerle konuşmak ve
              danışmanlık hizmeti vermek için sabırsızlıkla bekliyorum.
              </div>
              <div className="linkedinDiv">
              <a
                href="https://www.linkedin.com/in/alpkeles/"
                className="linkedinSocial3"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="1.5x" />
              </a>
            </div>
            </div>
          </article>
        </div>
    </section>
    </div>
  );
}

export default EkibimizContent;
