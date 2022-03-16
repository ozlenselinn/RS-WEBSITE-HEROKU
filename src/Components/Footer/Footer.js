import React from "react";
import "./FooterStyle.css";
import KvkAydın from "./KvkAydın"


 
  //FOOTER
function Footer(){
  return (
    <>
    <footer id="footer">
                

                <div className="copyright">
                <a className="links" href="/KvkAydın">KVKK Aydınlatma Metni</a><a className="links" href="#"> | İletişim</a> 
                          
                <p id="date">2022  ©  resumeshiners.com  </p>
                        Designed by BITSPLS.
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