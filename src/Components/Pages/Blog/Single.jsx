import SinglePostStaj2 from "./SinglePostStaj2";
import SinglePost2 from "./SinglePostLisans";
import SinglePostStaj1 from "./SinglePostStaj1";
import SinglePostDoktora from "./SinglePostDoktora";
import SinglePostRS from "./SinglePostRS";
import "./Single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePostStaj2 />
      <SinglePostLisans />
      <SinglePostStaj1/>
      <SinglePostDoktora/>
      <SinglePostRS/>
     
    </div>
  );
}