import React from "react";
import "./FooterStyle.css";
 
  //FOOTER
function Footer(){
  return (
    <>
    <footer id="footer">
                

                <div className="copyright">
                <a href="#">Şartlar ve Koşullar</a><a href="#"> | Gizlilik ve Çerez Politikası</a>               
                <p id="date">2022  ©  resumeshiners.com  </p>
                        Designed by BITSPLS.
                </div>
                <div id="social">
                    <ul className="icons">
                        <li><a Href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a Href="#"><i className="fab fa-github"></i></a></li>
                        <li><a Href="#"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
    
            </footer>
  </>
  );
};
export default Footer; 