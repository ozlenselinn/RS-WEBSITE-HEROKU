import SinglePost from "./SinglePost";
import SinglePost2 from "./SinglePost2";
import SinglePostStaj1 from "./SinglePostStaj1";
import "./Single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <SinglePost2 />
      <SinglePostStaj1/>
     
    </div>
  );
}