import emailjs from "emailjs-com";
import "./Iletisim.css";
import React from "react";
import Lottie from "react-lottie";
import animationData from "./contactAnm";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Email() {
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

  return (
    <div className="momDiv">
      <div className="cerceve">
        <h1 id="iletisim">İLETİŞİM</h1>
        <p id="aciklama">
          Bizimle iletişime geçmek için
          <label id="adres"> info@resumeshiners.com</label> adresine mail
          atabilirsiniz. Bilgilendirici yazılarımızdan, fırsatlarımızdan ve
          paketlerimizden haberdar olmak için aşağıya mail adresinizi
          bırakabilirsiniz.
        </p>
        <div className="animation">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>

        <Box
          id="box"
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
              id="standard-required"
              label="Adınızı ve Soyadınızı giriniz."
              variant="standard"
            />
          </div>
          <div className="input">
            <TextField
              fullWidth
              label="fullWidth"
              id="fullWidth"
              id="standard-required"
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
  );
}
