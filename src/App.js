import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import  './App.css';
// import { ChakraProvider } from '@chakra-ui/react'


import Home from './Components/Pages/Home';
import Ekibimiz from './Components/Pages/Kurumsal/Ekibimiz';
import Degerler from './Components/Pages/Kurumsal/Degerler';
import Contact from './Components/Pages/Iletisim/Contact';
import Blog from './Components/Pages/Blog/Blog';
import Navbarmenu from './Components/Navbar/Navbarmenu';
import SSS from './Components/Pages/SSS/SSS';
import Login from './Components/Pages/UyeGirisi/Login';
import CV_Ent from './Components/Pages/CvEndeksi/CV_Endeks';
import CV_Danis from './Components/Pages/Hizmetler/CV_Danis';
import Mulakat from './Components/Pages/Hizmetler/Mulakat';
import MotivMektup from './Components/Pages/Hizmetler/MotivMektup';
import Linkedin from './Components/Pages/Hizmetler/Linkedin';
import Egitim from './Components/Pages/Hizmetler/Egitim';
import Company from './Components/Pages/StratejikOrtaklar/Company';
import Topluluklar from './Components/Pages/StratejikOrtaklar/Topluluklar';
import AboutUs from './Components/Pages/Kurumsal/AboutUs';
import sonuclar from './Components/Pages/Profilim/Sonuclarim/Sonuclarim';
import Siparislerim from './Components/Pages/Profilim/Siparislerim/Siparislerim';
import Footer from './Components/Footer/Footer';
import HesapAyarlari from './Components/Pages/Profilim/HesapAyarlari/HesapAyarlari';
import CvEndeksAr from './Components/Pages/Profilim/CV_Endeks_AR/CvEndeksAr';


function App(Component){
  return (
     
     <div>
      <Router basename="/">
        {/* Add Menu Component */}
        <Navbarmenu />        
        <Switch> 
          <Route exact path="/" component={Home}/>       
          <Route path="/AboutUs" component={AboutUs}/>
          <Route path="/Ekibimiz" component={Ekibimiz}/>
          <Route path="/Degerler" component={Degerler}/>
          <Route path="/CV_Ent" component={CV_Ent}/>
          <Route path="/Linkedin" component={Linkedin}/> 
          <Route path="/Blog" component={Blog}/>
          <Route path="/SSS" component={SSS}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Login" component={Login}/>
          <Route path="/CV_Danis" component={CV_Danis}/>
          <Route path="/Mulakat" component={Mulakat}/>
          <Route path="/Motivasyon" component={MotivMektup}/> 
          <Route path="/LinkedIn" component={Linkedin}/> 
          <Route path="/Egitim" component={Egitim}/>
          <Route path="/Topluluklar" component={Topluluklar}/>
          <Route path="/Company" component={Company}/>
          <Route path="/Sonuclarim" component={sonuclar}/>
          <Route path="/Siparislerim" component={Siparislerim}/>  
          <Route path="/HesapAyarlari" component={HesapAyarlari}/>  
          <Route path='/CvEndeksAr' component= {CvEndeksAr}/>
          

      
        </Switch>
         {<Footer />}  
                
      </Router>
    
    </div>
  );
}
  
export default App;


