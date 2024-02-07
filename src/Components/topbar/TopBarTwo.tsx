import { Link } from "react-router-dom";
import "./TopBarTwo.css";

export default function TopBarTwo() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        {/* <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul> */}
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://th.bing.com/th/id/R.07f6ad0ebaf84692e878826636c382c6?rik=29AibLxrmjAADg&pid=ImgRaw&r=0"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">LOGIN</li>
            <li className="topListItem">REGISTER</li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
