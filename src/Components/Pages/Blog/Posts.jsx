import Post from "./Post";
import Post2 from "./Post2";
import PostStaj1 from "./PostStaj1";
import "./Posts.css";

export default function Posts() {
  return (
    <div className='baslik'>
   <h2>BLOG</h2>
    
    <div className="posts">
      <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post2 img="https://cdn-images-1.medium.com/max/800/1*tnQJtvXmetzuAesza8eqww.png" />
      <PostStaj1 img="https://cdn-images-1.medium.com/max/800/1*9MEJAHWPaiydFjVll90X3w.jpeg"/>
      <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </div>
    </div>
  );
}