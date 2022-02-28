import React from 'react';
import LinkedinContent from "./LinkedinContent";
import { Link } from "react-router-dom";
import "./CV.css";

function Linkedin(props) {
    return (
        <div className='odinMainContainer'>
          <div  className='odinLeftSidebarContainer'> <LinkedinContent>
          </LinkedinContent></div>
          <div className="row4">
      <div className="yonlendirmeGeri"><Link to={"./MotivMektup"}>Bir önceki hizmet</Link></div>
      <div className="yonlendirmeIleri"><Link to={"./Egitim"}>Bir sonraki hizmet</Link></div>

      </div>
        </div>
      );
}
export default Linkedin;