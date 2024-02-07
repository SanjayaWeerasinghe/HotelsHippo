export default function SideImage() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        className="SideImage"
        style={{
          width: "40%",
          height: "100vh",
          position: "sticky",
          left: "0",
          top: "0",
        }}
      >
        <a
          href="https://blog.hotelshippo.com/"
          style={{
            fontSize: "40px",
            color: "white",
            position: "absolute",
            top: "50%",
            zIndex: 1,
            textAlign: "center",
            left: "25%",
          }}
        >
          HotelsHippo.com Blog
        </a>

        <img
          src="https://gateway.pinata.cloud/ipfs/QmWteacNdvev7cwrKqvAYEgsC3jQDkiVBuMTPnqi7jGPvY"
          alt="Blog Cover"
          style={{
            marginTop: "0px",
            height: "100vh",
            width: "100%",
            filter: "contrast(0.8)",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          height: "1444px",
          top: "0",
          //   backgroundColor: "red",
        }}
      >
        <div
          className="para"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="slTravel"
            style={{
              display: "flex",
              flexDirection: "row",
              position: "relative",
              top: "6%",
              textAlign: "center",
            }}
          >
            <a
              href="https://blog.hotelshippo.com/category/travel/sri-lanka/"
              style={{ marginRight: 10 }}
            >
              SRI LANKA
            </a>
            <a href="https://blog.hotelshippo.com/category/travel/">TRAVEL</a>
          </div>
          <div
            className="amazing"
            style={{
              fontSize: "35px",
              textAlign: "center",
              position: "relative",
              top: "10%",
            }}
          >
            SRI LANKA - AMAZING LITTLE ISLAND
          </div>
          <div
            style={{
              fontSize: "15px",
              textAlign: "center",
              position: "relative",
              top: "12%",
            }}
          >
            Poster on November 21, 2022
          </div>
          <img
            src="https://gateway.pinata.cloud/ipfs/QmUnUN7K66r4k6AZYXSF6xg15XEfFZn7JTc63fAa9XV4Pu"
            alt="GalleFort"
            style={{
              height: "40vh",
              width: "60%",
              position: "relative",
              top: "15%",
            }}
          />
          <div
            className="paragraph"
            style={{
              alignItems: "center",
              position: "relative",
              top: "18%",
              marginLeft: "20%",
              marginRight: "20%",
            }}
          >
            <p style={{ textAlign: "justify" }}>
              Located in the Asian continent, Sri Lanka is a popular island
              among tourists. Though small in size, foreign tourists can
              experience all climates and weather conditions, and ecological
              zones around the world here.
              <br />
              <br />
              After entering Sri Lanka from Katunayake International Airport and
              after a maximum journey of 5-to-6 hours, tourists can start
              enjoying these immortal experiences. It is possible to see rivers
              flowing through tea plantations, waterfalls, shining green
              forests, and their roaming animals in a 4-hour journey from the
              airport while experiencing a cold environment. It is possible to
              enter the forests full of wildlife like{" "}
              <strong style={{ color: "silver" }}>Asian elephants</strong> and
              leopards in a 4-hour journey from the airport. Those looking for
              Sri Lankan culture and traditions can start their exploration with
              a 4-hour drive from the airport. A 30-minute drive is all it takes
              to be alone on a coconut-fringed, white-foam beach.
              <br />
              <br />
              <strong style={{ color: "silver" }}>
                We must tell the world
              </strong>{" "}
              that a paradise full of diverse foods and drinks, entertaining
              dances, songs, and Sri Lankan hospitality unique to Sri Lanka
              exists within these 65,610 square kilometers.
            </p>
          </div>
          <video
            src="https://blog.hotelshippo.com/wp-content/uploads/2022/11/Amazing-Sri-Lanka-Video.mp4"
            style={{
              height: "40vh",
              width: "60%",
              position: "relative",
              top: "20%",
            }}
          ></video>
        </div>
        <div
          style={{
            fontSize: "20px",
            textAlign: "center",
            position: "relative",
            top: "18%",
          }}
        >
          <strong>Sri Lanka</strong> - Amazing Little Island
        </div>
        <div
          className="SocialMedia"
          style={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            top: "20%",
            left: "20%",
          }}
        >
          <i
            className="fa-brands fa-facebook"
            style={{ marginRight: "5px", width: "20px", height: "20px" }}
          />
          <i
            className="fa-brands fa-twitter"
            style={{ marginRight: "5px", width: "20px", height: "20px" }}
          />
          <i
            className="fa-brands fa-pinterest"
            style={{ width: "20px", height: "20px", marginRight: "5px" }}
          />
          <i
            className="fa-brands fa-linkedin-in"
            style={{ marginRight: "5px", width: "20px", height: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}
