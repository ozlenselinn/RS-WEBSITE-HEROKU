import React from "react";
import "./FooterStyle.css";
import KvkAydin from "./KvkAydin";

//FOOTER
function Footer(){
  return (
    <>
    <footer id="footer">               

                <div className="copyright">
                {/* <a className="links" href="/KvkAydin" >KVKK Aydınlatma Metni  | </a> */}
                <a className="links" href="/Contact">Bizimle İletişime Geç!</a>                           
                <p id="date">2022  ©  resumeshiners.com  </p>                       
                </div>
                <div id="social">
                    <ul className="icons">
                        <li><a Href="https://www.instagram.com/resumeshiners/"><i class="fab fa-instagram"></i></a></li>                        
                        <li><a Href="https://www.linkedin.com/company/resumeshiners/"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
    
            </footer>
  </>
  );
};
export default Footer; 