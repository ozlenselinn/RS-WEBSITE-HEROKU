import React from 'react';
import AkademikBasvuru from "./AkademikBasvuru";
import CoverLetter from "./CoverLetter";

function Egitim(props) {
  return (
    <div className="rows">
      <div className="row1"> <CoverLetter></CoverLetter></div>
      <div className="row2"> <AkademikBasvuru></AkademikBasvuru></div>
    </div>

  );
}

export default Egitim;