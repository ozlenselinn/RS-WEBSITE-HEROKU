import { Link } from "react-router-dom";
import "./Post.css";

export default function PostStaj1({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        
        <span className="postTitle">
          <Link to="/PostStaj1" className="link">
          Staj Rehberi#1 — Özgeçmiş Hazırlama

 
            
          </Link>
        </span>
        <hr />
   
      </div>
      <p className="postDesc">
      Hayal edin, hedefiniz olan şirkette bir insan kaynakları çalışanı olarak yer alıyorsunuz. Staj başvuru döneminin sonlarına doğru, her gün önünüzden onlarca, belki de yüzlerce başvurunun geçtiği haftalar...
      </p>
    </div>
  );
}