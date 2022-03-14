import React from 'react';
// import arkaplan from './arkaplan.png';
// import arkaplan from './arkaplan.svg';
import HomeStyle from './HomeStyle.css';
import arkaplan from './home_back.svg';

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
//import amblem from './amblem.png';
//BUTON EKLENECEK, SAYFA RESPONSİVE HALE GETİRİLECEK

//<img src = "/kurumsalImages/amblem.png" alt = " "> </img> 
//<h1> HEDEFİMİZ GELECEĞİNİZİ PARLATMAK! </h1>
  //          <img src={amblem} style = {{width:"300px" , float:'right', padding:"10em", margin:"2em"}} />

const Home = () => {

	return (
    <>
    <div  className='containerHome'>
    {/* <img id='arka' src={arkaplan} />  */}
        <div id="arka">           
          {/* <div className="title-container">
            <p className='main-title'>Create Your<br/>Custom<br/>Workspace.</p>
            <p className="main-desc">For each execution of a job.</p>
          </div> */}
          <div id="page-container">       
            
            <section id="features">
            
                {/* <img className="hero-img" src="https://res.cloudinary.com/lucas2308/image/upload/v1542204505/interview_zpoxsi.svg" alt="job seeker image"/> */}
                <h1 id="hero-text">GELECEĞİNİ<br/>PARLAT!</h1>
                <p class="main-desc">ResumeShiners ekibi olarak geleceğinizi parlatıyoruz!
İş/Staj Başvurularınız için danışmanlık, özgeçmiş hazırlama gibi hizmetlerimizle sizlerleyiz.</p>
            
                <div class="getstarted-section">
                   <a href="#" class="btn-getstarted">Hizmetleri Öğren</a>
                </div>
                   
            </section>

            {/* <section id="features">
                <div className="feature-box">
                    <h4>Yazılı ve Sözlü Geri Bildirim</h4>
                    <span className="feature-icon"><i className="fas fa-user-plus"></i></span>
                    <p id="description">Özgeçmişinize hem yazılı, hem de istek halinde sözlü geri bildirim sağlıyoruz.</p>
                </div>

                <div className="feature-box">
                    <h4>Özgeçmiş İnceleme, Düzenleme ve Hazırlama</h4>
                    <span className="feature-icon"><i className="fas fa-file-upload"></i></span>
                    <p id="description">Tecrübeli ekibimizle birlikte özgeçmişinizi inceliyor, düzenliyor ve sıfırdan hazırlıyoruz.</p>
                </div>

                <div className="feature-box">
                    <h4>Uzun Vadeli Hizmet</h4>
                    <span className="feature-icon"><i className="fas fa-briefcase"></i></span>
                    <p id="description">12 aya varan paketlerimizle birlikte, süreç boyunca sizi yalnız bırakmıyor, sizlerle birlikte biz de gelişiyoruz.</p>
                </div>
            </section>            */}

            {/* <footer id="footer"></footer> */}
    </div>
        </div>
                   
        
    </div>
    </>
       )
      
}

export default Home;
