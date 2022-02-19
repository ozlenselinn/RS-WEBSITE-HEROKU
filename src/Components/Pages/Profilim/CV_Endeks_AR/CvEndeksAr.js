import React, { useState} from "react";
import Select from "react-select";
import data from './data.json';
import CvEndeksStyle from './CvEndeksStyle.css';
import { FileUploader } from "react-drag-drop-files";
import Lottie from "react-lottie";
import animationData from "./cv_endeks_lottie";

const fileTypes = ["DOCX", "PDF", "DOC"];

function CvEndeksAr() {
  const [company, setCompany] = useState(null);
  const [position, setPosition] = useState(null);
  const [positionList, setPositionList] = useState([]);

  // handle change event of the country dropdown
  const handleCompanyChange = (obj) => {
    setCompany(obj);
    setPositionList(obj.position);
    setPosition(null);
  };
  
  // handle change event of the language dropdown
  const handlePositionChange = (obj) => {
    setPosition(obj);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // generate the link when both dropdowns are selected

  //file upload
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  
  return (
    <div className="container_endeks">
      <div className="float-parent-element-endeks">
        <h1 id="cvendeksHeader-endeks">CV ENDEKSİ</h1>            
      
        <div className='contentheader-endeks'>
          <b>Başvurmak istediğiniz şirketi seçiniz:</b>
        </div>
        <Select 
          placeholder="Şirket"
          value={company}
          options={data}
          onChange={handleCompanyChange}
          getOptionLabel={x => x.company}
          getOptionValue={x => x.company_code}
        />
        <br />
        <br></br>
        <br></br>
        
        <div className='contentheader-endeks'>
          <b>Başvurmak istediğiniz pozisyonu seçiniz: </b>
        </div>
       
        <Select
          placeholder="Pozisyon"
          value={position}
          options={positionList}
          onChange={handlePositionChange}
          getOptionLabel={x => x.name}
          getOptionValue={x => x.code}
        />
        
        <div className="file">
          <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <p>{file ? `Dosya adı: ${file.name}` : "Henüz yüklenen dosya yok"}</p>
        </div>
      
        <input id="buton" type="submit" value="Gönder" />
        
        <div className='lottie-endeks'>
            <Lottie 
              options={defaultOptions}
              height={500}
              width={500}                    
            />
        </div>  
            
      </div>      
    </div>    
  );
}

export default CvEndeksAr;
