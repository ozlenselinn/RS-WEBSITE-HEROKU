import React from "react";
import "./IletisimDesktop.css";
import "./IletisimMobile.css";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,    
  } from '@chakra-ui/react'
  
  
function Kvk(props) {  
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  
    const btnRef = React.useRef()
    return (
      <>            
        <Button  size='xs' colorScheme='teal' variant='link' ref={btnRef} onClick={onOpen}>
          KVKK Metnini
        </Button>  
        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>ResumeShiners KVKK</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p><bold>KİŞİSEL VERİLERİN KORUNMASI KANUNU UYARINCA AYDINLATMA METNİ</bold><br/>
6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca Veri Sorumlusu sıfatıyla hareket eden
ResumeShiners olarak kişisel verilerinizin aşağıda belirtilen kapsam dahilinde kaydedileceği, saklanacağı,
güncelleneceği, ilgili mevzuatın izin verdiği durumlarda 3. kişilere açıklanabileceği, aktarılabileceği,
sınıflandırılabileceği ve ilgili mevzuatta belirtilen diğer usul ve esaslara uygun olarak işlenebileceği
hususlarında sizleri bilgilendirmek isteriz. RESUMESHINERS kişisel verilerinizin hukuka uygun olarak geniş
anlamda işlenmesi ve gizliliğin korunması amacıyla mümkün olan en üst seviyede gerekli idari ve güvenlik
tedbirlerini almaktadır.<br/>
Bu metinde;<br/>
* RESUMESHİNERS’ın, resumeshiners.com uzantılı internet sitesini (“Site”) ziyaret etmeniz (“Çevrimiçi
Ziyaretçi”),<br/>
* RESUMESHİNERS ile hizmet sözleşmesi imzalayarak Site harici ve Site üzerinden RESUMESHİNERS
hizmetlerini kullanmanız,<br/>
* Ticari iletişim kanalları ile genel ve kişiye özel kampanya bilgilendirmelerin yapılmasını kabul etmeniz,
* İletişim kanallarımız üzerinden karşılıklı olarak iletişime geçmemiz,<br/>
* RESUMESHİNERS tarafından düzenlenen kampanya ve diğer etkinliklere katılmanız halinde kişisel veri
işleme süreçlerine ilişkin aydınlatılmanız amaçlanmıştır.<br/>
<bold>A. TANIMLAR</bold><br/>
İşbu aydınlatma metninde geçen; Kişisel Veri; Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü
bilgiyi, Kişisel Verilerin Korunması Kanunu (KVKK): 6698 sayılı Kişisel Verilerin Korunması Kanunu’nu,
RESUMSHİNERS veya Veri Sorumlusu: Kişisel Verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt
sisteminin kurulmasından ve yönetilmesinden sorumlu olan tüzel kişiyi, ifade etmektedir.
<br/>
<bold>B.KİŞİSEL VERİLERİNİZİN İŞLENME AMACI VE İŞLENEN KİŞİSEL VERİLER</bold><br/>
…İsim-Soy isim<br/>
…E-posta Adresi<br/>
…Telefon numarası<br/>
…İnternet sitesi ve sosyal medya adresleri (LinkedIn, blog sayfaları vs.)<br/>
…Kişinin kendisini anlattığı kısa bir yazı<br/>
…Eğitim Bilgileri (Lise/Üniversite başlangıç ve mezuniyet yılları, ortalama ve transkript belgesi)<br/>
…İş ve Staj tecrübeleri<br/>
…Kişinin yer aldığı gönüllü ve/veya mesleki projeler<br/>
…Gönüllü Tecrübeler (öğrenci toplulukları ve sosyal sorumluluk kurumları)<br/>
…Yetkinlikler(Yabancı dil ve Word/Excel gibi programların bilgisi)<br/>
…İlgi alanları (spor, sinema vs)<br/>
…Ödüller ve Sertifikalar<br/>
…Referans Bilgileri<br/>
İşbu yukarıda belirtilen bilgiler özgeçmiş hazırlama ve niyet mektubu yazma hizmetleri kapsamında
işlenecektir.<br/>
<bold>C. Yasal Yükümlülükler ve Şirket içi Faaliyetler Amacıyla</bold><br/>
Mevzuata aykırı her türlü fiil, suç veya davranışa karşı sizin, RESUMESHİNERS ve çalışanlarının ve diğer
üçüncü kişilerin güvenliğini sağlamak, mevzuattan kaynaklanan yükümlülüklerimizi yerine getirmek ve
yetkili ve görevli özel veya kamu kurum ve kuruluşlarına karşı hukuki yükümlüklerimizi yerine getirmek,
doğacak uyuşmazlıklarda mahkeme, icra dairesi, hakem heyeti gibi resmi kurum ve kuruluşlara karşı her
türlü dava, cevap ve itiraz hakkının kullanılması, uyuşmazlıklara ilişkin görüşme ve anlaşma süreçlerinin
yürütülmesi, tarafımızdan bilgi talep etmeniz veya yasal haklarınız kapsamında başvuruda bulunmanız
halinde gerekli bilgilerin tarafınıza ulaştırılabilmesi, sözleşme ve mevzuata aykırı şekilde kullanımı
engellemek, şüpheli işlemleri ve hukuka aykırı kullanımları tespit edebilmek, iptal işlemlerini
gerçekleştirebilmek, iç denetim ve kontrol ile raporlama, test, geliştirme çalışmalarını yapabilmek ve
müşteri deneyimini iyileştirmeye yönelik çalışma ve geliştirmeler, operasyonel süreçlere ilişkin stratejik
planlama, analiz ve iş geliştirme çalışmaları yapılması kapsamında ad soyad, doğum tarihi, yasal süreçler
nedeniyle aktarılması veya resmi mercilerce gönderilen belgelerde bulunması halinde imza ve T.C. Kimlik
Numarası, cep telefonu numarası, e-posta adresi, adres, talep ve şikayetleriniz, faturalarınız, ödeme
bilgileriniz, çağrı merkezi ses kayıtlarınız, Site üzerinden işlem yapmanız halinde log kayıtları, Kullanıcı ID,
IP adresi, güvenlik kamerası kayıtları, ilgili hukuki işlem bilgileriniz ile uyuşmazlık süreçlerine ilişkin yazışma
ve dosya bilgilerinizi,<br/>
Çevrimiçi Ziyaretçi bakımından ise bilgi işlem güvenliğinin sağlanması ve kötü amaçlı kullanımların
önlenmesi, faaliyetlerin mevzuata uygun yürütülmesi, yetkili ve görevli kamu kurum ve kuruluşlarına karşı
diğer hukuki yükümlüklerimizi yerine getirmek amacıyla çerez kayıtları (IP adresi, gezinti bilgileri, kullanılan
cihaz bilgisi (ID) ve trafik verisi) verilerinizi işlemekteyiz.<br/>
D.KİŞİSEL VERİ TOPLAMA YÖNTEMLERİ VE HUKUKİ SEBEPLERİ<br/>
Kişisel verilerinizi;<br/>
RESUMESHİNERS ile onayladığınız hizmet sözleşmeleri ve kullanıcı üyelik sözleşmesi uyarınca
yükümlülüklerimizin yerine getirilmesi ile satış ve satış sonrası destek süreçlerine ilişkin olarak “Bir
sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla sözleşmenin taraflarına ait
kişisel verilerin işlenmesinin gerekli olması”<br/>
Pazarlama, segmentasyon ve analiz çalışmaları kapsamında kişisel veri işleme süreçlerine ve ticari iletişim
faaliyetlerine ilişkin olarak vereceğiniz “açık rıza”,<br/>
RESUMESHİNERS tarafından sunulan hizmetlerin, Site’nin ve Mobil Uygulamalarınınn kullanımı
kapsamında şüpheli işlemlerin tespiti ve önlenmesi, işlem güvenliğinin sağlanması, operasyonel süreçlere
(stratejik planlama, analiz ve iş geliştirme çalışmaları) ilişkin çalışmalar ve müşteri ilişkileri süreçlerimize
ilişkin olarak “veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması”,
Mevzuattan kaynaklanan yükümlülüklerimize ilişkin “hukuki yükümlülüğün yerine getirilmesi” ve
“kanunlarda açıkça öngörülmesi”,<br/>
Hukuki uyuşmazlık, soruşturma ve diğer adli/resmi süreçlere ilişkin olarak da “hakların tesisi, kullanılması
veya korunması için veri işlemenin ve aktarmanın zorunlu olması”,
İlgili kişinin kendisi tarafından alenileştirilmiş olması hukuki sebeplerine dayanarak otomatik ve otomatik
olmayan yöntemlerle işlemekteyiz.<br/>
E.)KVKK KAPSAMINDAKİ HAKLARINIZ<br/>
Veri Sorumlusu sıfatıyla hareket eden RESUMESHİNERS tarafından verilerinizin işlendiği kapsam dahlinde
info@resumeshiners.com adresine e-posta yoluyla “Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında
Tebliğ”de belirtilen diğer usuller ile başvuruda bulunarak her zaman;<br/>
a) kişisel verilerinizin işlenip işlenmediğini öğrenme,<br/>
b) kişisel verilerinizin işlenme faaliyetlerine ilişkin olarak bilgi talep etme,<br/>
c) kişisel verilerinizin işlenme amaçlarını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,<br/>
ç) kişisel verilerinizin yurt içinde üçüncü kişilere aktarılmış olması durumunda bu kişileri öğrenme,<br/>
d) kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme,<br/>
e) kişisel verilerinizin işlenmesini gerektiren sebeplerin ortadan kalkması veya söz konusu verileri
işleyebilmek için hukuki dayanağın veya meşru menfaatin bulunmaması halinde kişisel verilerinizin
silinmesini veya yok edilmesini isteme,<br/>
f) kişisel verilerinizin aktarıldığı üçüncü kişilere (d) ve (e) bentlerinde belirtilen taleplerinizin bildirilmesini
ve aynı işlemleri gerçekleştirmelerini isteme,<br/>
g) kişisel verilerinizin otomatik sistemler vasıtasıyla analiz edilmesi suretiyle ortaya çıkabilecek aleyhte
sonuçlara itiraz etme,<br/>
ğ) kişisel verilerinizin kanuna aykırı bir şekilde işlenmesi sebebiyle zarara uğramanız halinde bu zararın
tazmin edilmesini talep etme hakkına sahipsiniz.<br/>
Başvurunuzda;<br/>
Ad, soyad ve başvuru yazılı ise elle atılmış imza,<br/>
Türkiye Cumhuriyeti vatandaşları için T.C. kimlik numarası, yabancılar için uyruğu, pasaport numarası veya
varsa kimlik numarası,<br/>
Tebligata esas yerleşim yeri veya iş yeri adresi,<br/>
Varsa bildirime esas elektronik posta adresi, telefon ve faks numarası,<br/>
Talep konusu,<br/>
yer almalı ve konuya ilişkin bilgi ve belgeler de başvuruya eklenmelidir.<br/>
Bu amaçlarla yaptığınız başvurunun ek bir maliyet gerektirmesi durumunda, Kişisel Verileri Koruma Kurulu
tarafından belirlenecek tarifedeki ücret tutarını ödemeniz gerekebilir. Başvurunuzda yer alan talepleriniz,
talebin niteliğine göre en kısa sürede ve en geç başvurunuz ulaştıktan sonra 30 (otuz) gün içinde
sonuçlandırılacaktır.<br/>
KVKK ve ilgili mevzuat kapsamındaki haklarınız hakkında detaylı bilgi almak için Kişisel Verileri Koruma
Kurumu’nun internet sayfasını (https://www.kvkk.gov.tr/) ziyaret edebilirsiniz.<br/>
Aydınlatma Metni ile belirtilen kapsam,amaç ve süre dahilinde kişisel verilerimin işlenmesini kabul
ediyorum.</p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Kabul Ediyorum</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default Kvk;
