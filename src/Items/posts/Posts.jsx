import Post from "../post/Post";
import "./Posts.css";

export default function Posts() {
  return (
    <div className="posts">
      
      <Post img="https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg" />
      <Post img="https://images.pexels.com/photos/370474/pexels-photo-370474.jpeg" />
      <Post img="https://images.pexels.com/photos/636243/pexels-photo-636243.jpeg"/>
      <Post img="https://images.pexels.com/photos/2045600/pexels-photo-2045600.jpeg"/>
      <Post img="https://images.pexels.com/photos/2255441/pexels-photo-2255441.jpeg"/>
    </div>
    

  );
}
