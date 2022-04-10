import { Link } from "react-router-dom";
import "./Post.css";

export default function PostLisans({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        
        <span className="postTitle">
          <Link to="/PostLisans" className="link">
         
           Lisans Araştırmaları: Giriş Rehberi  
            
          </Link>
        </span>
        <hr />
   
      </div>
      <p className="postDesc">
      Bu yazıya küçük bir dipnotla başlamak iyi olacaktır diye düşünüyorum. Elbette ki kendime bir araştırmacı diyecek niteliklere sahip değilim...
      </p>
    </div>
  );
}