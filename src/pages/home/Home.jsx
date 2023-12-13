import { useLocation } from "react-router-dom";
import Header from "../../Items/header/Header";
import Posts from "../../Items/posts/Posts";
import Sidebar from "../../Items/sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
