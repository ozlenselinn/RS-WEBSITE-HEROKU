import React from 'react';
import AkademikBasvuru from "./AkademikBasvuru";
import CoverLetter from "./CoverLetter";
import { Link } from "react-router-dom";
import "./CV.css";

function Egitim(props) {
  return (
    <div className="rows">
      <div className="row1"> <CoverLetter></CoverLetter></div>
      <div className="row2"> <AkademikBasvuru></AkademikBasvuru></div>
      <div className="row4">
      <div className="yonlendirmeGeri"><Link to={"./Linkedin"}>Bir önceki hizmet</Link></div>
      </div>
    </div>

  );
}

export default Egitim;