import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      
        <h1 className="singlePostTitle" style= {{margin:'20px'}}>
        
        ResumeShiners Nedir?
        
        </h1>
        <div className="singlePostInfo">
          <span>
            Yazar:
            <b className="singlePostAuthor">
             
                Alperen Keleş 25 Mart 2021
             
            </b>
          </span>
        
        </div>
        <p className="singlePostDesc">
        ResumeShiners, 3 ODTÜ öğrencisi tarafından Mart 2021'de başlatılan, özgeçmiş, niyet mektubu düzenleme ve hazırlama konularında, 
        iş ve staj başvurularında öğrencilere yardımcı olacak bir danışmanlık girişimidir.
        <br />
        <br />
        Hedefimiz, yıllardır kendi çevremiz başta olmak üzere pek çok öğrencinin yaşadığını gördüğümüz ve bildiğimiz, iş ve staj başvuru
        süreçlerinde yaşanan problemlerin azaltılması veyahut yaşanmaması için öğrencilere faydalı olacak bir hizmet sunmaktır.

        <br />
        <br />

        İlk aşamada <b>özgeçmiş düzenleme, hazırlama ve geri bildirim sağlama </b> ile başlayacak olup, zamanla süreçlerimizi daha standart ve 
        yapılı hale getirdikçe iş başvurularının diğer önemli kısımlarıyla ilgili de danışmanlık veriyor olacağız. Geçtiğimiz yıllarda gerek 
        yurt içi, gerek yurt dışı, gerek başarılı, gerek başarısız pek çok iş/staj/yüksek lisans başvurusu tecrübesini yaşadık, gözlemledik.

        <br />
        <br />

       <b> Kendi tecrübelerimizin yanına literatürün ortaya koyduğu bulguları ve kabulleri de ilave edip, sunabileceğimiz en iyi hizmeti 
        sunmak için çabalıyor olacağız.</b>

        <br />
        <br />

        Sunacağımız hizmetlerin yanı sıra, normal şartlar altında bu blogda paylaşılan yazılar daha detaylı, 
        daha profesyonel şekilde hazırlanarak sitemizde paylaşılıyor olacak. Bunun yanında videolar, webinar’lar, 
        çevrim içi dersler, podcast’ler gibi çok çeşitli içeriklerle uzun vadede öğrencilerin iş ve staj başvurularında karşılarına çıkacak problemleri daha çıkmadan çözmelerini, süreçlerin getirdiği zorlukların üzerinden gelmelerini sağlayacağız.
       

        <br />
        <br />
        Bize ulaşmak için <b>info@resumeshiners.com </b> adresine mail atabilir, ya da <a href = "https://www.instagram.com/resumeshiners/"> instagram hesabımız </a> üzerinden bizle iletişime geçebilirsiniz.




        

       </p>
      </div>
    </div>
  );
}