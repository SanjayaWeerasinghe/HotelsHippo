import SideImage from "./Components/SideImage";
import Homepage from "./Pages/homepage/Homepage";
import Header from "./Components/header/Header";
import Posts from "./Components/posts/Posts";
import Topbar from "./Components/topbar/Topbar";
import Sidebar from "./Components/sidebar/Sidebar";
import Login from "./Pages/login/Login";
import TopBarTwo from "./Components/topbar/TopBarTwo";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./Pages/register/Register";
import Write from "./Pages/write/Write";
export default function App() {
  return (
    //Uncomment 1 page at a time to see the pages

    <div>
      <SideImage />
      {/* <Homepage />
      <Login />
      <Register /> */}
      {/* <Write /> */}
    </div>
  );
}


