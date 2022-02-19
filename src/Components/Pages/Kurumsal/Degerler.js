import React from "react";
import MotivContentValues from "./MotivContentValues";
import MotivContentMotiv from "./MotivContentMotiv";
import "./DegerlerStyle.css";

function Degerler(props) {

  return (
    <div className='odinMainContainer'>
      <div  className='odinLeftSidebarContainer'> <MotivContentValues>
      </MotivContentValues></div>
     <div className='odinMainContentContainer'> <MotivContentMotiv>
      </MotivContentMotiv></div>
    </div>
  );
}

export default Degerler;
