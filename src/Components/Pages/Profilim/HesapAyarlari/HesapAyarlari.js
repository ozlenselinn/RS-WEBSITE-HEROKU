import React from "react";
import HesapContent from "./HesapContent";
import ghost from "./ghost.svg";

function HesapAyarlari() {
  return (
    <div className="containerAyar">
      <HesapContent></HesapContent>
      {/* <img src="ghost" style = {{width:"300px" , float:'right', padding:"10em", margin:"2em"}}/> */}
    </div>
  );
}

export default HesapAyarlari;
