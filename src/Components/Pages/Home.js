import React from 'react';
// import arkaplan from './arkaplan.png';
// import arkaplan from './arkaplan.svg';
import HomeStyle from './HomeStyle.css';
import arkaplan from './home_back.jpg';


<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
//import amblem from './amblem.png';
//BUTON EKLENECEK, SAYFA RESPONSİVE HALE GETİRİLECEK

//<img src = "/kurumsalImages/amblem.png" alt = " "> </img> 
//<h1> HEDEFİMİZ GELECEĞİNİZİ PARLATMAK! </h1>
  //          <img src={amblem} style = {{width:"300px" , float:'right', padding:"10em", margin:"2em"}} />

const Home = () => {
  
	return (
    <>      
        {/* <input id="buton" type="submit" value="Bize Ulaş" /> */}
        <div className='bodyy'>
          <div>
            <img src={arkaplan} style = {{width:"1100px" , float:'center', paddingBottom:"10px", marginButtom:"2em"}}></img>
          </div>
          <div className='button1'>
          <a href="" className="rolling_tiles">Bize Ulaş</a>
          </div>
        </div>
   
    </>
       )
      
}

export default Home;


