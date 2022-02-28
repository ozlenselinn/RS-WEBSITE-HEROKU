import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";

import logo from '../../logo.png';
const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isMenu2, setisMenu2] = useState(false);
    const [isMenu3, setisMenu3] = useState(false);
    const [isMenu4, setisMenu4] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const [isResponsiveclose2, setResponsiveclose2] = useState(false);
    const [isResponsiveclose3, setResponsiveclose3] = useState(false);
    const [isResponsiveclose4, setResponsiveclose4] = useState(false);
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
    const [isMenuSubMenu3, setMenuSubMenu3] = useState(false);
    const [isMenuSubMenu4, setMenuSubMenu4] = useState(false);



    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };


  const toggleClass2 = () => {
    setisMenu2(isMenu2 === false ? true : false);
    setResponsiveclose2(isResponsiveclose2 === false ? true : false);
};

const toggleClass3 = () => {
    setisMenu3(isMenu3 === false ? true : false);
    setResponsiveclose3(isResponsiveclose3 === false ? true : false);
};

const toggleClass4 = () => {
    setisMenu4(isMenu4 === false ? true : false);
    setResponsiveclose4(isResponsiveclose4 === false ? true : false);
};

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

  
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
  
    const toggleSubmenu2= () => {
        setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
      };

    const toggleSubmenu3= () => {
        setMenuSubMenu3(isMenuSubMenu3 === false ? true : false);
      };

    const toggleSubmenu4= () => {
        setMenuSubMenu4(isMenuSubMenu4 === false ? true : false);
      }; 
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
    let boxClassSubMenu2 = ["sub__menus"];
    if(isMenuSubMenu2) {
        boxClassSubMenu2.push('sub__menus__Active');
    }else {
        boxClassSubMenu2.push('');
    }

    let boxClassSubMenu3 = ["sub__menus"];
    if(isMenuSubMenu3) {
        boxClassSubMenu3.push('sub__menus__Active');
    }else {
        boxClassSubMenu3.push('');
    }

    let boxClassSubMenu4 = ["sub__menus"];
    if(isMenuSubMenu4) {
        boxClassSubMenu4.push('sub__menus__Active');
    }else {
        boxClassSubMenu4.push('');
    }
  
    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                         <img src={logo} alt="logo" /> 
                    </NavLink>
                </div> 

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>} 
  
    
                    <ul className={boxClass.join(' ')}>                    
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Kurumsal <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/AboutUs`}>Hakkımızda </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Degerler`}> Değerlerimiz </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Ekibimiz`}> Ekibimiz </NavLink> </li>
                        </ul>
                    </li>
                    
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Topluluklar`}> Stratejik Ortaklarımız </NavLink> </li>
                       
                                                    
                        
                        

                    <li onClick={toggleSubmenu3} className="menu-item sub__menus__arrows" > <Link to="#"> Hizmetlerimiz <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu3.join(' ')} > 
                            <li> <NavLink onClick={toggleClass3} activeClassName='is-active'  to={`/CV_Danis`}>CV/Özgeçmiş Danışmanlığı </NavLink> </li>
                            <li><NavLink onClick={toggleClass3} activeClassName='is-active' to={`/Mulakat`}> Mülakat Simülasyonu </NavLink> </li>
                            <li><NavLink onClick={toggleClass3} activeClassName='is-active' to={`/Motivasyon`}> Motivasyon Mektubu </NavLink> </li>
                            <li><NavLink onClick={toggleClass3} activeClassName='is-active' to={`/LinkedIn`}> LinkedIn Hizmeti </NavLink> </li>
                            <li><NavLink onClick={toggleClass3} activeClassName='is-active' to={`/Egitim`}> Eğitimler/Atölyeler </NavLink> </li>
                        </ul>
                    </li>
                    
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/CV_Endeks`}> CV Endeksi </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Blog`}> Blog </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/SSS`}> SSS </NavLink> </li>
                   
                   
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> İletişim </NavLink> </li>
                    <li className="menu-item" ><div id='neon' ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Login`}> Üye Girişi</NavLink></div></li>
                     
                    <li onClick={toggleSubmenu4} className="menu-item sub__menus__arrows" > <Link to="#"> Profilim <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu4.join(' ')} > 
                            <li> <NavLink onClick={toggleClass4} activeClassName='is-active'  to={`/Form`}>CV Oluştur </NavLink> </li>
                            <li><NavLink onClick={toggleClass4} activeClassName='is-active' to={`/CvEndeksAr`}> CV Endeksim </NavLink> </li>
                            <li><NavLink onClick={toggleClass4} activeClassName='is-active' to={`/Sonuclarim`}> Sonuçlarım </NavLink> </li>
                            <li><NavLink onClick={toggleClass4} activeClassName='is-active' to={`/Siparislerim`}> Siparişlerim </NavLink> </li>
                            <li><NavLink onClick={toggleClass4} activeClassName='is-active' to={`/HesapAyarlari`}> Hesap Ayarları </NavLink> </li>
                            <li><NavLink onClick={toggleClass4} activeClassName='is-active' to={'/'}> ÇIKIŞ </NavLink> </li>
                        </ul>
                    </li>
                  




                    </ul>
            



                    </nav>     
                </div>          
        
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu;
