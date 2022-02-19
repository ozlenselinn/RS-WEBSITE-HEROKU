import React from 'react';
import CVPaketBir from "./CVPaketBir";
import CVPaketIki from "./CVPaketIki";
import CVPaketUc from "./CVPaketUc";



// import "./CV.css";

function CV_Danis(props) {
  return (
    <div className="rows">
      <div className="row1"> <CVPaketBir></CVPaketBir></div>
      <div className="row2"> <CVPaketIki></CVPaketIki></div>
      <div className="row3"><CVPaketUc></CVPaketUc></div>
    </div>

  );
}

export default CV_Danis;