import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span
          className="headerTitleSm"
          style={{ color: "teal", position: "relative", top: "10%" }}
        >
          HippoHotels.com
        </span>
        <span
          className="headerTitleLg"
          style={{ color: "teal", position: "relative", top: "10%" }}
        >
          BLOG
        </span>
      </div>
      <img
        className="headerImg"
        src="https://gateway.pinata.cloud/ipfs/QmUnUN7K66r4k6AZYXSF6xg15XEfFZn7JTc63fAa9XV4Pu"
        alt=""
        style={{ position: "relative", top: "12%" }}
      />
    </div>
  );
}
