import "./IletisimMobile.css";
import React from "react";
import Lottie from "react-lottie";
import animationData from "./contactAnm";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function IletisimComponentMobile() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
 /* function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ih46s2",
        "template_7y8bzgk",
        e.target,
        "user_Sw7iCTZasWjkASkWLAs3s"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  */

  return (
    <div className="momDivContectMobile">
      <div className="col">
        <div className="row">
          <h1 id="iletisim">İLETİŞİM</h1>
          <p id="aciklama">
            Bizimle iletişime geçmek için
            <label id="adres"> info@resumeshiners.com</label> adresine mail
            atabilirsiniz. Bilgilendirici yazılarımızdan, fırsatlarımızdan ve
            paketlerimizden haberdar olmak için aşağıya mail adresinizi
            bırakabilirsiniz.
          </p>
        </div>
        <div className="row">
          <div className="animationIletisimMobile">
            <Lottie options={defaultOptions} height={400} width={350} />
          </div>
        </div>
        <div className="row">
          <Box
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
                label="fullWidth"
                id="fullWidth"
                // id="standard-required"
                label="Adınızı ve Soyadınızı giriniz."
                variant="standard"
              />
            </div>
            <div className="input">
              <TextField
                fullWidth
                label="fullWidth"
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
          </Box>
        </div>
      </div>
    </div>
  );
}
