import Sidebar from "../../Items/sidebar/Sidebar";
import Singlepost from "../../Items/singlepost/Singlepost";
import "./Single.css";

export default function Single() {
  return (
    <div className="single">
      <Singlepost />
      <Sidebar />
    </div>
  );
}
