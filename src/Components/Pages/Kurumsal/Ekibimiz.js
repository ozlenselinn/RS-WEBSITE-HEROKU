import React from "react";
import EkibimizContent from "./EkibimizContent";
import "./Ekibimiz.scss";

function Ekibimiz(props) {

  return (
    <>
    <div>
      <EkibimizContent></EkibimizContent>
    </div>
    <div className="buttons">
     <a href="Degerler">
     <div class="l-arrow-circ"></div>
     </a>
   
    </div>

    </>
  );
}
export default Ekibimiz;