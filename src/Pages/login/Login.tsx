import "./login.css";
import TopBarTwo from "../../Components/topbar/TopBarTwo";

export default function Login() {
  return (
    <div>
      <TopBarTwo />
      <div className="login">
        <span className="loginTitle">Welcome to HotelsHippo</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
          />
          <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">Register</button>
      </div>
    </div>
  );
}
