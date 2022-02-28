import React from "react";
import MulakatPaketEnvanter from "./MulakatPaketEnvanter";
import MulakatPaketSektorelIK from "./MulakatPaketSektorelIK";
import MulakatPaketSektorelYD from "./MulakatPaketSektorelYD";
import MulakatPaketAkademik from "./MulakatPaketAkademik";
import { Link } from "react-router-dom";
import "./CV.css";

function Mulakat(props) {
  return (
    <div className="rows">
      <div className="row1">
        <MulakatPaketEnvanter></MulakatPaketEnvanter>
      </div>
      <div className="row2">
        <MulakatPaketSektorelIK></MulakatPaketSektorelIK>
      </div>
      <div className="row2">
        <MulakatPaketSektorelYD></MulakatPaketSektorelYD>
      </div>
      <div className="row2">
        <MulakatPaketAkademik></MulakatPaketAkademik>
      </div>
      <div className="row4">
      <div className="yonlendirmeGeri"><Link to={"./CV_Danis"}>Bir önceki hizmet</Link></div>
      <div className="yonlendirmeIleri"><Link to={"./MotivMektup"}>Bir sonraki hizmet</Link></div>

      </div>
    </div>
  );
}

export default Mulakat;
