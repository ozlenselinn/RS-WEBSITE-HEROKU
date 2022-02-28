import { useLocation } from "react-router";
import Header from "./Header";
import Posts from "./Posts";
import "./Blog.css";

export default function Blog() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="blog">
        <Posts />
      
      </div>
    </>
  );
}