import { Link } from "react-router-dom";
import "./Post.css";

export default function PostRS({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        
        <span className="postTitle">
          <Link to="/PostRS" className="link">
         
          ResumeShiners Nedir? 
            
          </Link>
        </span>
        <hr />
   
      </div>
      <p className="postDesc">
      ResumeShiners, 3 ODTÜ öğrencisi tarafından Mart 2021'de başlatılan...
      </p>
    </div>
  );
}