import "./SSS.css";
import React from "react";
import Faq from "react-faq-component";

const dataCv = {
  title: <h5 id="sssHeader">ÖZGEÇMİŞ HAKKINDA SORULAR</h5>,
  rows: [
    {
      title: (
        <p className="sorular">
          Size ulaştıktan ne kadar süre sonra özgeçmişim hazır olacak?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Sizden doldurmanızı istediğimiz formu bize gönderdikten sonra 72 saat
          içerisinde özgeçmişinizin ilk halini sizinle paylaşacağız. Ardından,
          sizden gelen geri bildirimler ışığında özgeçmişinizi en kısa sürede
          son haline ulaştıracağız.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Özgeçmişimin fazla uzun olduğunu öğrendim, bu konuda bana nasıl
          yardımcı olabilirsiniz?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Özgeçmişinizin incelenmesi sırasında sizi öne çıkarabilecek bilgilerin
          öncelikli dikkat çekecek bir sıralamada ve özelleşmiş ara yüzümüz
          yardımıyla özgeçmişinizin kalitesinden ödün vermeden özgeçmişinizi 1
          sayfa içerisinde sonlandırabiliriz.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Özgeçmiş formunda çeşitli soruları yanıtlamakta zorlanıyorum, ne
          yapmalıyım?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Birebir toplantı yaparak sizi daha iyi tanıyabileceğimiz ve size
          soracağımız sorularla sizin içinizdeki cevheri ortaya çıkarma şansı
          bulabileceğimiz eğitim içeren paketimizi tercih edebilirsiniz. Bu
          görüşmemizde bu gibi sorularınıza anında cevap alabileceksiniz. Ayrıca
          bu eğitim sırasında sizi öne çıkarabilecek tüyoları sizinle paylaşıp
          ilerleyen süreçte özgeçmişinizi kendiniz hazırlarken size yol
          gösterecek püf noktaları da sizinle paylaşacağız.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          İş başvurularımda kullandığım bir özgeçmişim var, onunla yüksek
          lisans/doktoraya başvurmalı mıyım?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Sektörel ve akademik başvuruların farklı dinamikleri olduğu için aynı
          özgeçmiş ile iki tip başvuru yapmayı verimli bulmuyoruz. ResumeShiners
          ihtiyaçlarınızı gözeterek bu iki tür için özelleştirilmiş
          hizmetlerimizle size destek olmaya hazır.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Özgeçmiş Hazırlama paketlerini aldıktan sonra paketimi Sadakat
          Paketine yükseltebiliyor muyum?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Evet, Özgeçmişin Hazır paketimizi almanızı takiben 1 ay içerisinde
          sadakat paketini indirimli alma hakkınız devam ediyor. Ayrıca, sizin
          tavsiyenizle gelen 3 arkadaşınız karşılığında 6 aylık Sadakat
          Paketimizi size hediye ediyoruz.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Akademik CV’mi çok sık güncellemem gerekiyor. Sizden aldığım hizmet
          sonucunda kendim düzenleme imkanına sahip olacak mıyım?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Evet, Akademik Özgeçmişin Hazır paketimizin çıktısı olarak sizlere
          güncellenebilir bir formatta CV’nizi paylaşıyor olacağız.
        </p>
      ),
    },
  ],
};

const dataGenel = {
  title: <h5 id="sssHeader">GENEL SORULAR</h5>,
  rows: [
    {
      title: (
        <p className="sorular">
          Sizden hangi hizmet paketinizi almam gerektiği konusunda kararsızım.
          Bana nasıl yardımcı olabilirsiniz?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Bu tarz durumlarda bizimle iletişime geçerek (varsa) halihazırda
          bulunan özgeçmişinizi, niyet mektubunuzu, başvuru yapmayı düşündüğünüz
          sektör ve kurumları bizimle paylaşmanızı tavsiye ediyoruz. Biz
          gönderdiğiniz belgeleri ve isteklerinizi inceledikten sonra sizin için
          en faydalı olacağını düşündüğümüz paketimizi ve/veya size özel bir
          paketi size önereceğiz. Bizimle iletişime geçerek daha detaylı bilgi
          alabilirsiniz.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Sizinle paylaştığım kişisel bilgilerimin başka kişi ve kurumlarla
          paylaşılmadığından nasıl emin olacağım?
        </p>
      ),
      content: (
        <p className="cevaplar">
          İnternet sitemizde yer alan ve mail adresinizi bizimle paylaşırken
          veya gönderdiğimiz formları doldururken onayladığınız KVKK Aydınlatma
          Metninde de belirttiğimiz üzere sizin onayınız olmadan 3. şahıslarla
          kişisel bilgilerinizi kesinlikle paylaşmıyoruz.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          ResumeShiners yeni ve genç bir ekibe sahip ve kariyerimin bu önemli
          noktası için yeterli tecrübeye sahip misiniz?
        </p>
      ),
      content: (
        <p className="cevaplar">
          ResumeShiners kurucu ekibi başta olmak üzere öğrencilik hayatlarında
          kariyer gelişimi konusunda birçok yetkili kişi ile görüşerek bilgi
          birikimimizi artırdık. Ayrıca genç ve dinamik ekibimiz sayesinde
          sizinle daha rahat iletişim kurabiliyoruz. ResumeShiners’tan
          danışmanlık hizmeti almış kişilerin memnuniyet oranının %100 olarak
          korunması da mutlu danışan mottomuz için çok kıymetli.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          ResumeShiners’ı biz de üniversitemizde/topluluğumuzda görmek
          istiyoruz, bunun için ne yapmalıyız?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Bizlere mail ve/veya sosyal medya kanallarımız aracılığıyla
          ulaşabilir, stratejik partnerlerimiz arasında yer alabilirsiniz.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Sizlerle daha hızlı iletişime geçmek için Instagram veya LinkedIn
          üzerinden size ulaşabilir miyiz?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Bütün iletişim kanallarımız 7 gün 24 saat boyunca sizin sorularınıza
          cevap vermek için hazır.
        </p>
      ),
    },
  ],
};

const dataSop = {
  title: <h5 id="sssHeader">NİYET MEKTUBU (SoP) HAKKINDA SORULAR</h5>,
  rows: [
    {
      title: (
        <p className="sorular">
          Başvuru yaparken zaten CV’mizi gönderiyoruz. Niyet mektubuna neden
          gerek duyuluyor?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Özgeçmişler yapısı gereği kısa zamanda incelenen ve kişinin kendisini
          uzun uzun ifade etmesine pek imkan tanımayan bir iki sayfadan oluşan
          yazılardır. Niyet mektupları (SoP’ler) ise CV’lerin aksine; kişinin
          kendisini ifade etme, eksik yönlerini kapatıp güçlü yönlerine vurgu
          yapma fırsatlarının olduğu birkaç paragraftan oluşan ve kişinin nasıl
          birisi ve pozisyon özelinde motivasyonunun neler olduğunu anlatan
          yazılardır. Bu sebeple iyi yazılmış bir niyet mektubu başvuru sahibini
          bir sonraki aşamaya geçmesinde büyük bir avantaj sağlayabilir.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Başvuracağım her yer/pozisyon için farklı niyet mektubu mu yazmalıyım?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Niyet mektupları kendi yapıları gereği statik ve dinamik birkaç
          paragraftan oluşurlar. Bu noktada, farklı başvurularınız için tamamen
          aynen kullanacağınız paragraflar olduğu gibi başvuruya özelleştirilmiş
          paragraflarınız da olmalıdır.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Daha önceden yazılmış bir niyet mektubum yok. Bu durum hizmetinizin
          kalitesine olumsuz bir etki yaratır mı?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Alanında uzmanlaşmış danışman ekibimizin size yönelteceği sorular,
          birlikte yapılacak toplantılar ve süreç boyu devam eden kuvvetli
          iletişim bağımız sayesinde sizi tanıyor ve niyet mektubunuzu en iyi
          şekilde oluşturuyor olacağız.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Yurt dışı başvurularında büyük öneme sahip olan SoP hizmetinizi
          aldıktan sonra kabul alan danışanlarınız var mı?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Daha önce bizden bu konuda danışmanlık hizmeti aldıktan sonra Almanya,
          Çekya, Amerika Birleşik Devletleri gibi dünyanın birçok noktasından
          kabul alan danışanlarımız bulunmaktadır. ResumeShiners ile birlikte
          yurt dışı başvurularını yapan danışanlarımızın kabul oranı ise
          %100’dür.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Sizlerle daha hızlı iletişime geçmek için Instagram veya LinkedIn
          üzerinden size ulaşabilir miyiz?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Bütün iletişim kanallarımız 7 gün 24 saat boyunca sizin sorularınıza
          cevap vermek için hazır.
        </p>
      ),
    },
  ],
};

const dataMul = {
  title: <h5 id="sssHeader">MÜLAKAT HAKKINDA SORULAR</h5>,
  rows: [
    {
      title: (
        <p className="sorular">
          Mülakatlarınızda yabancı dil seçeneğiniz var mı?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Evet, mülakatlarımızı isteğinize göre Türkçe, İngilizce ve Almanca
          gerçekleştirebiliyoruz. Daha detaylı bilgi için hizmetlerimiz
          sekmesine bakabilirsiniz.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Son zamanlarda yaygınlaşan mülakat simülasyonları etkinliklerinden
          farkınız nedir?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Bizim öncelikli amacımız sizi karşılaşabileceğiniz gerçekçi bir
          mülakata hazırlamaktır. Bu kapsamda mülakat simülasyonlarımızın son 15
          dakikasında sizlere geri bildirim ve tavsiyeler vererek spesifik bir
          kurum için değil herhangi bir mülakat için hazırlıklı konuma
          geleceksiniz.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Çok fazla mülakat simülasyonu paketiniz var. Benim için hangisinin
          gerekli olduğuna karar veremiyorum, yardımcı olur musunuz?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Bu tarz durumlarda bizlere ulaşarak başvurmak istediğiniz kurumları
          söylerseniz biz de sizin için en uygun olduğunu düşündüğümüz mülakat
          tipini önerebiliriz.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Mülakat simülasyonlarınızı online mı yüz yüze mi
          gerçekleştiriyorsunuz?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Mülakatlarımızı sizin de uygun olduğunuz bir vakitte öncelikli olarak
          Zoom üzerinden gerçekleştiriyoruz. Ankara’da olan danışanlarımız için
          uygun durumlarda yüz yüze de gerçekleştirebiliriz.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Sizden mülakat paketi aldığımda hangi kuruma/pozisyona başvurmamın
          simülasyonunu gerçekleştireceğiz?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Bizden mülakat simülasyonu hizmetimizi almanızın ardından bölümünüze
          ve ilerleyen süreçte öncelikli olarak başvur yapmak istediğiniz
          pozisyonları göz önünde bulundurarak sizin için özel olarak
          hazırlanmış bir internet sitesi göndereceğiz. Gönderdiğimiz bu sitede
          sizin temsili başvurunuz için temsili bir kurum gözlemleyeceksiniz.
          Bizler de mülakat sırasında bu kurumun çalışanlarını canlandıracağız.
          Mülakata gelmeden siteyi incelemeyi unutmayın.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Bu mülakatlar ResumeShiners işe alım sürecinin bir parçası mı?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Hayır, mülakat simülasyonu paketlerimiz sizleri, kariyer
          yolculuğunuzda istediğiniz noktaya ulaşırken karşılaşabileceğiniz
          mülakatlara hazırlamayı hedefler.
        </p>
      ),
    },
  ],
};
/*
const dataYlsy = {
  title: <h5 id="sssHeader">YLYS HAKKINDA SORULAR</h5>,
  rows: [
    {
      title: <p className="sorular">Hangi ülkeler için hizmet veriyorsunuz?</p>,
      content: (
        <p className="cevaplar">
          ResumeShiners olarak YLYS kapsamında sizin seçmiş olduğunuz tüm ülke
          ve üniversite başvurularınıza destek veriyoruz.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          Danışmanlık kabul etmeyen okullar için adınız görünüyor mu? Bu
          kapsamda doküman gizliliği var mı?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Danışmanlık kabul etmeyen okullar için ortak çalışmalarla YLYS
          belgelerinizin hazırlanma sürecine sizleri de dahil ederek
          ilerliyoruz. Bu kapsamda Başvuru belgelerinde sizin adınız yer
          almaktadır. Ayrıca, internet sitemizde yer alan ve mail adresinizi
          bizimle paylaşırken veya gönderdiğimiz formları doldururken
          onayladığınız KVKK Aydınlatma Metninde de belirttiğimiz üzere sizin
          onayınız olmadan 3. şahıslarla kişisel bilgilerinizi kesinlikle
          paylaşmıyoruz.
        </p>
      ),
    },
    {
      title: <p className="sorular">Kabul alma oranınız nedir?</p>,
      content: (
        <p className="cevaplar">
          Ekibimizle ortak olarak yapılan ve tamamlanmış olan başvuruların kabul
          oranı %100. ResumeShiners ailesi olarak bu oranı korumak ve
          danışanlarımızın istediği okullara ulaşmasını sağlamak için yurtdışına
          yerleşmiş ve akademik hayatına devam eden ekip üyelerimizle başvuru
          sürecini gerçekleştiriyoruz.
        </p>
      ),
    },
    {
      title: <p className="sorular">Diğer şirketlerden ne farkınız var?</p>,
      content: (
        <p className="cevaplar">
          Pek çok danışmanlık şirketi danışanlarını anlaşmalı olduğu okullara
          yönlendirmektedir. Ekip olarak bizler sizin seçtiğiniz okul ve bölüm
          tercihlerinize göre belgelerinizi hazırlayabiliyor seçmiş olduğunuz
          paketlere göre gerekli güncellemeleri tamamlıyoruz.
        </p>
      ),
    },
    {
      title: (
        <p className="sorular">
          YLYS’ ye henüz başvurmadım, YLYS mülakatı için hizmet alabilir miyim?
        </p>
      ),
      content: (
        <p className="cevaplar">
          Seçtiğiniz mülakat simülasyonları kapsamında sizlere
          karşılaşabileceğiniz soru ve ortamlara ilişkin bir hazırlık süreci
          başlatıyoruz. Destek aldığınız mülakat süreci sonucunda ihtiyaçlarınız
          belirlenerek tek bir kurum mülakatına değil, herhangi bir mülakat
          sürecine karşı hazırlıklı konuma geleceksiniz.
        </p>
      ),
    },
  ],
};
*/
const config = {
  animate: true,
  tabFocus: true,
};

const styles = {
  bgColor: "white",
  rowTitleTextSize: "large",
  rowTitlePaddingLeft: "20px",
  rowContentTextSize: "16px",
  rowContentPaddingTop: "10px",
  rowContentPaddingBottom: "10px",
  rowContentPaddingLeft: "50px",
  rowContentPaddingRight: "150px",
  arrowColor: "#ff6341",
  transitionDuration: "0.6s",
};

export default function SSS() {
  return (
    <div className="momDivSSS">
      <h1 id="sssSayfaHeader">SIKÇA SORULAN SORULAR</h1>
      <div className="bolum">
        <Faq data={dataGenel} styles={styles} config={config} />
      </div>
      <div className="bolum">
        <Faq data={dataCv} styles={styles} config={config} />
      </div>
      <div className="bolum">
        <Faq data={dataSop} styles={styles} config={config} />
      </div>
     
      <div className="bolum">
        <Faq data={dataMul} styles={styles} config={config} />
      </div>
    </div>
  );
}
