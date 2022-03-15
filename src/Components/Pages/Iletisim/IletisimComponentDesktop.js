import emailjs from "emailjs-com";
import "./IletisimDesktop.css";
import Kvk from "./Kvk";
import React from "react";
import Lottie from "react-lottie";
import animationData from "./contactAnm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import { ChakraProvider } from '@chakra-ui/react';


export default function IletisimComponentDesktop() {
  const form = useRef();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jdoibm5",
        "template_495m24y",
        form.current,
        "fd9vMMcjPbssU3-Ib"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mail iletilmiştir, lütfen mail kutunuzu kontrol ediniz.");
          
        },
        (error) => {
          console.log(error.text);
          alert("Mail iletilemedi, lütfen tekrar deneyiz.");
        }
      );
    form.current.reset();
  }

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  return (
    <div className="momDivContectDesktop">
      <div className="cerceve">
        <h1 id="iletisim">İLETİŞİM</h1>
        <p id="aciklama">
          Bizimle iletişime geçmek için
          <Mailto email="info@resumeshiners.com">
            <label className="resumeMail"> info@resumeshiners.com </label>
          </Mailto>{" "}
          adresine mail atabilirsiniz. Bilgilendirici yazılarımızdan,
          fırsatlarımızdan ve paketlerimizden haberdar olmak için aşağıdaki
          forma mail adresinizi bırakabilirsiniz.
          <div className="instagramIletisimDiv">
            <p id="aciklamaInsta">
              Ayrıca instagram hesabımızı da ziyaret edebilirsiniz.
              <a
                href="https://instagram.com/resumeshiners?utm_medium=copy_link"
                className="iletisimSocial"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="instaBut"
                  size="1.5x"
                />
              </a>
            </p>
          </div>
        </p>
        <div className="animationIletisimDesktop">
          <Lottie options={defaultOptions} height={400} width={350} />
        </div>
        <form ref={form} onSubmit={sendEmail} id="boxDesktop">
          <h2 id="iletisimHeader">İLETİŞİM FORMU</h2>
          <label className="inputsD">Adınızı ve Soyadınızı giriniz.</label>
          <input type="text" name="name" />
          <label className="inputsD">Email adresinizi giriniz.</label>
          <input type="email" name="email" />
          <sub>ornek@ornek.com</sub>
          <p className="kvkk">
            Formu gönderdiğiniz takdirde, <ChakraProvider >
          <Kvk></Kvk>
          </ChakraProvider> onaylamış olacaksınız.
          </p>
          
          <input id="buton" type="submit" value="Gönder" />
        </form>
      </div>
     
    </div>
  );
}
