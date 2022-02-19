import React from "react";
import MulakatPaketEnvanter from "./MulakatPaketEnvanter";
import MulakatPaketSektorelIK from "./MulakatPaketSektorelIK";
import MulakatPaketSektorelYD from "./MulakatPaketSektorelYD";
import MulakatPaketAkademik from "./MulakatPaketAkademik";

// import "./CV.css";

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
    </div>
  );
}

export default Mulakat;
