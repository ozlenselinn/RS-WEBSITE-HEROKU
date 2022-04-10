import { Link } from "react-router-dom";
import "./Post.css";

export default function PostDoktora({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        
        <span className="postTitle">
          <Link to="/PostDoktora" className="link">
         
          Doktora Başvuruları: Kapsamlı Rehber
            
          </Link>
        </span>
        <hr />
   
      </div>
      <p className="postDesc">
      Daha önceki yazılarımda da kısaca bahsettiğim gibi, geçtiğimiz dönem içerisinde 7 doktora başvurusu yaptım, bunlardan 2 tanesinden ise kabul aldım...
      </p>
    </div>
  );
}