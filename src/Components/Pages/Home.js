import React from 'react';
import HomeStyle from './HomeStyle.css';
import arkaust from './home_back._ust.jpg';
import arkaalt from './home_back._alt.jpg';
import Contact from './Iletisim/Contact';
const Home = () => {
  
	return (
    <>      
        <div className='bodyy'>
          <div className='ust'>
            <img src={arkaust} style = {{width:"100%" , float:'center'}}></img>            
          </div>
          <div className='button1'>
          <a href="/Contact" className="rolling_tiles">Bize Ulaş</a>
          </div>
          <div className='alt'>            
            <img src={arkaalt} style = {{width:"100%" , float:'center'}}></img>
          </div>
        </div>   
    </>
       )      
}
export default Home;


