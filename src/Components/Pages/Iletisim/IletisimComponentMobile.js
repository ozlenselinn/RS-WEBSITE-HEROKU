import "./IletisimMobile.css";
import emailjs from "emailjs-com";
import React from "react";
import Lottie from "react-lottie";
import animationData from "./contactAnm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useRef } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Kvk from "./Kvk";

export default function IletisimComponentMobile() {
  
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
    <div className="momDivContectMobile">
      <div className="col">
        <div className="row">
          <h1 id="iletisimHeaderM">İLETİŞİM</h1>
          <p id="aciklama">
          Bizimle iletişime geçmek için
          <Mailto email="info@resumeshiners.com">
            <label className="resumeMail"> info@resumeshiners.com </label>
          </Mailto>{" "}
          adresine mail atabilirsiniz. Bilgilendirici yazılarımızdan,
          fırsatlarımızdan ve paketlerimizden haberdar olmak için aşağıdaki
          forma mail adresinizi bırakabilirsiniz.
            <p className="aciklamaInstaMobile">
              <br></br>
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
          </p>
        </div>
        <div className="row">
          <div className="animationIletisimMobile">
            <Lottie options={defaultOptions} height={400} width={350} />
          </div>
        </div>
        <div className="row">
          {/* <Box
          ref={form}
          onSubmit={sendEmail}
            id="boxMobile"
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <h2 id="iletisimHeader">İLETİŞİM FORMU</h2>
            <div className="input">
              <TextField
                fullWidth
                id="fullWidth"
                // id="standard-required"
                label="Adınızı ve Soyadınızı giriniz."
                variant="standard"
              />
            </div>
            <div className="input">
              <TextField
                fullWidth
                id="fullWidth"
                // id="standard-required"
                label="Email adresinizi giriniz."
                variant="standard"
              />
              <sub>ornek@ornek.com</sub>
            </div>
            <p id="kvkk">
              Formu gönderdiğiniz takdirde, KVKK Metnini onaylamış olacaksınız.
            </p>
            <input id="buton" type="submit" value="Gönder" />
          </Box> */}
          <form ref={form} onSubmit={sendEmail} id="boxMobile">
          <h2 id="iletisimFormHeaderM">İLETİŞİM FORMU</h2>
          <label className="inputsM">Adınızı ve Soyadınızı giriniz.</label>
          <input type="text" name="name" />
          <label className="inputsM">Email adresinizi giriniz.</label>
          <input type="email" name="email" />
          <sub>ornek@ornek.com</sub>
          <p className="kvkkIletisim">
            Formu gönderdiğiniz takdirde, <ChakraProvider >
          <Kvk></Kvk>
          </ChakraProvider> onaylamış olacaksınız.
          </p>
          <input id="buton" type="submit" value="Gönder" />
        </form>
        </div>
      </div>
    </div>
  );
}
