import PostStaj2 from "./PostStaj2";
import Post2 from "./PostLisans";
import PostStaj1 from "./PostStaj1";
import PostDoktora from "./PostDoktora";
import PostRS from "./PostRS";
import "./Posts.css";

export default function Posts() {
  return (
    <div className='baslik'>
   <h2>BLOG</h2>
    
    <div className="posts">
      <PostStaj2 img="https://cdn-images-1.medium.com/max/800/1*5eYQvVBLpWWidbguGlmGcg.png" />
      <Post2 img="https://cdn-images-1.medium.com/max/800/1*tnQJtvXmetzuAesza8eqww.png" />
      <PostStaj1 img="https://cdn-images-1.medium.com/max/800/1*9MEJAHWPaiydFjVll90X3w.jpeg"/>
      <PostDoktora img="https://cdn-images-1.medium.com/max/800/1*EzcaQNykPf64EkzcGzqDEg.jpeg"/>
      <PostRS img="https://miro.medium.com/max/1000/1*2zmTOPGttBj7E2pw3IjUvA.png"/>
    </div>
    </div>
  );
}