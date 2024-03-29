import { useLocation } from "react-router";
import Header from "../../Components/header/Header";
import Posts from "../../Components/posts/Posts";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        {/* <Sidebar /> */}
      </div>
    </>
  );
}
