import React from 'react';
import MotivPaketLetter from './MotivPaketLetter';
import MotivPaketAkademik from './MotivPaketAkademik';
import { Link } from "react-router-dom";
import "./CV.css";




function MotivMektup(props) {
  return (
    <div>
    <MotivPaketLetter></MotivPaketLetter>
    <MotivPaketAkademik></MotivPaketAkademik>
    <div className="row4">
      <div className="yonlendirmeGeri"><Link to={"./MotivMektup"}>Bir önceki hizmet</Link></div>
      <div className="yonlendirmeIleri"><Link to={"./Linkedin"}>Bir sonraki hizmet</Link></div>

      </div>
  
  

    </div>

  );
}

export default MotivMektup; 