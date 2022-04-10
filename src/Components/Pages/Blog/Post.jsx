import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        
        <span className="postTitle">
          <Link to="/Single" className="link">
          Staj Rehberi#2 — Niyet Mektubu
            
          </Link>
        </span>
        <hr />
   
      </div>
      <p className="postDesc">
      Niyet mektubu, başvurunuz esnasında kendinizi insanlaştırmanızı, 
      başvurudaki ve özgeçmişinizdeki bilgileri belli bir bağlam içerisine yerleştirmenizi...
      </p>
    </div>
  );
}