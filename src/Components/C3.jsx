import React from "react";
import "./c3.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";

const C3 = () => {
  return (
    <>
      <div className="c2">
        <h1 className="g1">Trending Trips</h1>

        <div className="card1">
          <img
            src="./images/c1.png"
            alt="pic"
            style={{
              width: "20vw",
              height: "25vh",
              color: "green",
              opacity: "1 ",
              borderRadius: "10px",
              //   marginTop: "3vh",
              //   float: "left",
            }}
          />

          <img
            src="./images/camp.png"
            alt="img"
            style={{
              width: "2vw",
              height: "4vh",
              marginRight: "7vw",
              marginTop: "-1vh",
            }}
          />
          <h4
            style={{
              //   display: "inline-block",
              //   float: "right",
              marginleft: "20vw",
              marginTop: "-4vh",
            }}
          >
            Camping
          </h4>
          <AccessTimeIcon
            style={{
              float: "left",
              color: "rgba(5, 107, 82, 0.842)",
              marginTop: "-2vh",
              height: "3vh",
            }}
          />
          <p
            style={{
              color: "rgba(5, 107, 82, 0.842)",
              fontWeight: "bold",
              float: "left",
              marginTop: "-4vh",
              marginLeft: "2px",
            }}
          >
            {" "}
            5N-6D
            <LocationOnIcon
              style={{ width: "2vw", height: "2vh", marginLeft: "1.5vw" }}
            />
            <p style={{ display: "inline-block", marginTop: "14px" }}>Delhi</p>
          </p>
          <h2
            style={{
              marginRight: "11vw",
              marginTop: "-3vh",
              width: "10vw",
            }}
            className="p1"
          >
            Spiti Summer
          </h2>
          <p
            style={{
              marginRight: "10vw",
              marginTop: "-3vh",
              height: "3vh",
              width: "20vw",
            }}
            className="p2"
          >
            Starts at <strong>Rs.18,999/-</strong>{" "}
          </p>
        </div>
        {/* CARD 2 */}
        <div className="card2">
          <img
            src="./images/c2.png"
            alt="pic"
            style={{
              width: "20vw",
              height: "25vh",
              color: "green",
              opacity: "1 ",
              borderRadius: "10px",

              //   marginTop: "3vh",
              //   float: "left",
            }}
          />
          <MotorcycleIcon style={{ float: "left", marginLeft: "1vw" }} />
          <h4
            style={{
              //   display: "inline-block",
              //   float: "left",
              marginRight: "14vw",
              marginTop: "0vh",
            }}
          >
            Biking
          </h4>

          <img
            src="./images/camp.png"
            alt="img"
            style={{
              width: "2vw",
              height: "4vh",
              float: "right",
              marginRight: "11vw",
              marginTop: "-7vh",
            }}
          />
          <h4
            style={{
              //   display: "inline-block",
              //   float: "right",
              marginleft: "20vw",
              marginTop: "-7vh",
            }}
          >
            Camping
          </h4>
          <AccessTimeIcon
            style={{
              float: "left",
              color: "rgba(5, 107, 82, 0.842)",
              marginTop: "-2vh",
              height: "3vh",
            }}
          />
          <p
            style={{
              color: "rgba(5, 107, 82, 0.842)",
              fontWeight: "bold",
              float: "left",
              marginTop: "-4vh",
              marginLeft: "2px",
            }}
          >
            {" "}
            7N-8D
            <LocationOnIcon
              style={{ width: "2vw", height: "2vh", marginLeft: "1.5vw" }}
            />
            <p style={{ display: "inline-block", marginTop: "14px" }}>Delhi</p>
          </p>
          <h3
            style={{
              marginTop: "-3vh",
              width: "20vw",
              height: "4vh",
            }}
            className="p1"
          >
            Spiti Circuit Biking /BackPac..
          </h3>
          <p
            style={{
              marginRight: "10vw",
              marginTop: "-3vh",
              height: "3vh",
              width: "20vw",
            }}
            className="p2"
          >
            Starts at <strong>Rs.26,999/-</strong>{" "}
          </p>
        </div>

        {/* CARD 3 */}
        <div className="card2">
          <img
            src="./images/c3.jfif"
            alt="pic"
            style={{
              width: "20vw",
              height: "25vh",
              color: "green",
              opacity: "1 ",
              borderRadius: "10px",

              //   marginTop: "3vh",
              //   float: "left",
            }}
          />
          <MotorcycleIcon style={{ float: "left", marginLeft: "1vw" }} />
          <h4
            style={{
              //   display: "inline-block",
              //   float: "left",
              marginRight: "14vw",
              marginTop: "0vh",
            }}
          >
            Biking
          </h4>

          <img
            src="./images/camp.png"
            alt="img"
            style={{
              width: "2vw",
              height: "4vh",
              float: "right",
              marginRight: "11vw",
              marginTop: "-7vh",
            }}
          />
          <h4
            style={{
              //   display: "inline-block",
              //   float: "right",
              marginleft: "20vw",
              marginTop: "-7vh",
            }}
          >
            Camping
          </h4>
          <AccessTimeIcon
            style={{
              float: "left",
              color: "rgba(5, 107, 82, 0.842)",
              marginTop: "-2vh",
              height: "3vh",
            }}
          />
          <p
            style={{
              color: "rgba(5, 107, 82, 0.842)",
              fontWeight: "bold",
              float: "left",
              marginTop: "-4vh",
              marginLeft: "2px",
            }}
          >
            {" "}
            8N-9D
            <LocationOnIcon
              style={{ width: "2vw", height: "2vh", marginLeft: "1.5vw" }}
            />
            <p style={{ display: "inline-block", marginTop: "14px" }}>Delhi</p>
          </p>
          <h3
            style={{
              marginTop: "-3vh",
              width: "20vw",
              height: "4vh",
            }}
            className="p1"
          >
            Manali Leh Manali
          </h3>
          <p
            style={{
              marginRight: "10vw",
              marginTop: "-3vh",
              height: "3vh",
              width: "20vw",
            }}
            className="p2"
          >
            Starts at <strong>Rs.31,499/-</strong>{" "}
          </p>
        </div>
        {/* Card 4 */}

        <div className="card2">
          <img
            src="./images/c4.jfif"
            alt="pic"
            style={{
              width: "20vw",
              height: "25vh",
              color: "green",
              opacity: "1 ",
              borderRadius: "10px",

              //   marginTop: "3vh",
              //   float: "left",
            }}
          />
          <MotorcycleIcon style={{ float: "left", marginLeft: "1vw" }} />
          <h4
            style={{
              //   display: "inline-block",
              //   float: "left",
              marginRight: "14vw",
              marginTop: "0vh",
            }}
          >
            Biking
          </h4>

          <img
            src="./images/camp.png"
            alt="img"
            style={{
              width: "2vw",
              height: "4vh",
              float: "right",
              marginRight: "11vw",
              marginTop: "-7vh",
            }}
          />
          <h4
            style={{
              //   display: "inline-block",
              //   float: "right",
              marginleft: "20vw",
              marginTop: "-7vh",
            }}
          >
            Camping
          </h4>
          <AccessTimeIcon
            style={{
              float: "left",
              color: "rgba(5, 107, 82, 0.842)",
              marginTop: "-2vh",
              height: "3vh",
            }}
          />
          <p
            style={{
              color: "rgba(5, 107, 82, 0.842)",
              fontWeight: "bold",
              float: "left",
              marginTop: "-4vh",
              marginLeft: "2px",
            }}
          >
            {" "}
            5N-6D
            <LocationOnIcon
              style={{ width: "2vw", height: "2vh", marginLeft: "1.5vw" }}
            />
            <p style={{ display: "inline-block", marginTop: "14px" }}>
              Guwahati
            </p>
          </p>
          <h3
            style={{
              marginTop: "-3vh",
              width: "20vw",
              height: "4vh",
            }}
            className="p1"
          >
            Meghalaya BackPacking
          </h3>
          <p
            style={{
              marginRight: "10vw",
              marginTop: "-3vh",
              height: "3vh",
              width: "20vw",
            }}
            className="p2"
          >
            Starts at <strong>Rs.19,499/-</strong>{" "}
          </p>
        </div>
        <h1 className="g2">Weekend Trips</h1>
        {/* card 5 */}
        <div className="card3">
          <img
            src="./images/c5.jpg"
            alt="pic"
            style={{
              width: "20vw",
              height: "25vh",
              color: "green",
              opacity: "1 ",
              borderRadius: "10px",

              //   marginTop: "3vh",
              //   float: "left",
            }}
          />
          <img
            src="/images/para.png"
            alt="para"
            style={{
              width: "1vw",
              height: "3vh",
              float: "left",
              marginLeft: "0.3vw",
            }}
          />
          <h4
            style={{
              //   display: "inline-block",
              //   float: "left",
              marginRight: "12.5vw",
              marginTop: "0vh",
            }}
          >
            Paragliding
          </h4>

          <img
            src="./images/camp.png"
            alt="img"
            style={{
              width: "2vw",
              height: "5vh",
              float: "right",
              marginRight: "10.8vw",
              marginTop: "-7vh",
            }}
          />
          <h4
            style={{
              //   display: "inline-block",
              float: "right",
              marginRight: "6vw",
              width: "5vw",
              height: "4vh",
              marginTop: "-6vh",
              //   backgroundColor: "red",
            }}
          >
            Camping
          </h4>
          <AccessTimeIcon
            style={{
              float: "left",
              color: "rgba(5, 107, 82, 0.842)",
              marginTop: "-1vh",
              height: "3vh",
            }}
          />
          <p
            style={{
              color: "rgba(5, 107, 82, 0.842)",
              fontWeight: "bold",
              float: "left",
              marginTop: "-4vh",
              marginLeft: "0vw",
            }}
          >
            {" "}
            1N-2D
            <LocationOnIcon
              style={{ width: "2vw", height: "2vh", marginLeft: "2vw" }}
            />
            <p style={{ display: "inline-block", marginTop: "14px" }}>Delhi</p>
          </p>
          <h3
            style={{
              marginTop: "-3vh",
              width: "20vw",
              height: "4vh",
            }}
            className="p1"
          >
            Bir Billing
          </h3>
          <p
            style={{
              marginRight: "10vw",
              marginTop: "-3vh",
              height: "3vh",
              width: "20vw",
            }}
            className="p2"
          >
            Starts at <strong>Rs.6,999/-</strong>{" "}
          </p>
        </div>
        {/* card 6 */}
        <div className="card4">
          <img
            src="./images/c6.jpg"
            alt="pic"
            style={{
              width: "20vw",
              height: "25vh",
              color: "green",
              opacity: "1 ",
              borderRadius: "10px",

              //   marginTop: "3vh",
              //   float: "left",
            }}
          />
          <img
            src="/images/snow.jfif"
            alt="para"
            style={{
              width: "1vw",
              height: "3vh",
              float: "left",
              marginLeft: "0.3vw",
            }}
          />
          <h4
            style={{
              //   display: "inline-block",
              //   float: "left",
              marginRight: "11vw",
              marginTop: "0vh",
            }}
          >
            Snow-Paradise
          </h4>

          <img
            src="./images/trk.png"
            alt="img"
            style={{
              width: "2vw",
              height: "5vh",
              float: "right",
              marginRight: "9vw",
              marginTop: "-7vh",
            }}
          />
          <h4
            style={{
              //   display: "inline-block",
              float: "right",
              marginRight: "4vw",
              width: "5vw",
              height: "4vh",
              marginTop: "-6vh",
              //   backgroundColor: "red",
            }}
          >
            Trekking
          </h4>
          <AccessTimeIcon
            style={{
              float: "left",
              color: "rgba(5, 107, 82, 0.842)",
              marginTop: "-1vh",
              height: "3vh",
            }}
          />
          <p
            style={{
              color: "rgba(5, 107, 82, 0.842)",
              fontWeight: "bold",
              float: "left",
              marginTop: "-4vh",
              marginLeft: "0vw",
            }}
          >
            {" "}
            2N-3D
            <LocationOnIcon
              style={{ width: "2vw", height: "2vh", marginLeft: "2vw" }}
            />
            <p style={{ display: "inline-block", marginTop: "14px" }}>Delhi</p>
          </p>
          <h3
            style={{
              marginTop: "-3vh",
              width: "20vw",
              height: "4vh",
            }}
            className="p1"
          >
            Manali Lahaul Atal Tunnel
          </h3>
          <p
            style={{
              marginRight: "10vw",
              marginTop: "-3vh",
              height: "3vh",
              width: "20vw",
            }}
            className="p2"
          >
            Starts at <strong>Rs.6,999/-</strong>{" "}
          </p>
        </div>
        {/* card 7 */}
        <div className="card4">
          <img
            src="./images/c7.jpg"
            alt="pic"
            style={{
              width: "20vw",
              height: "25vh",
              color: "green",
              opacity: "1 ",
              borderRadius: "10px",

              //   marginTop: "3vh",
              //   float: "left",
            }}
          />
          <img
            src="/images/camp.png"
            alt="para"
            style={{
              width: "2vw",
              height: "3vh",
              float: "left",
              marginLeft: "1vw",
            }}
          />
          <h4
            style={{
              //   display: "inline-block",
              //   float: "left",
              marginRight: "12vw",
              marginTop: "0vh",
            }}
          >
            Camping{" "}
          </h4>

          <img
            src="./images/trk.png"
            alt="img"
            style={{
              width: "2vw",
              height: "5vh",
              float: "right",
              marginRight: "9vw",
              marginTop: "-7vh",
            }}
          />
          <h4
            style={{
              //   display: "inline-block",
              float: "right",
              marginRight: "4vw",
              width: "5vw",
              height: "4vh",
              marginTop: "-6vh",
              //   backgroundColor: "red",
            }}
          >
            Trekking
          </h4>
          <AccessTimeIcon
            style={{
              float: "left",
              color: "rgba(5, 107, 82, 0.842)",
              marginTop: "-1vh",
              height: "3vh",
            }}
          />
          <p
            style={{
              color: "rgba(5, 107, 82, 0.842)",
              fontWeight: "bold",
              float: "left",
              marginTop: "-4vh",
              marginLeft: "0vw",
            }}
          >
            {" "}
            2N-3D
            <LocationOnIcon
              style={{ width: "2vw", height: "2vh", marginLeft: "2vw" }}
            />
            <p style={{ display: "inline-block", marginTop: "14px" }}>Delhi</p>
          </p>
          <h3
            style={{
              marginTop: "-3vh",
              width: "20vw",
              height: "4vh",
            }}
            className="p1"
          >
            Kasol Kheerganga
          </h3>
          <p
            style={{
              marginRight: "10vw",
              marginTop: "-3vh",
              height: "3vh",
              width: "20vw",
            }}
            className="p2"
          >
            Starts at <strong>Rs.5,999/-</strong>{" "}
          </p>
        </div>
        {/* card 8  */}
        <div className="card4">
          <img
            src="./images/c8.jpg"
            alt="pic"
            style={{
              width: "20vw",
              height: "25vh",
              color: "green",
              opacity: "1 ",
              borderRadius: "10px",

              //   marginTop: "3vh",
              //   float: "left",
            }}
          />
          <img
            src="/images/raf.png"
            alt="para"
            style={{
              width: "2vw",
              height: "4vh",
              float: "left",
              marginLeft: "1vw",
            }}
          />
          <h4
            style={{
              //   display: "inline-block",
              //   float: "left",
              marginRight: "12vw",
              marginTop: "0vh",
            }}
          >
            Rafting{" "}
          </h4>

          <img
            src="./images/trk.png"
            alt="img"
            style={{
              width: "2vw",
              height: "5vh",
              float: "right",
              marginRight: "9vw",
              marginTop: "-7vh",
            }}
          />
          <h4
            style={{
              //   display: "inline-block",
              float: "right",
              marginRight: "4vw",
              width: "5vw",
              height: "4vh",
              marginTop: "-6vh",
              //   backgroundColor: "red",
            }}
          >
            Trekking
          </h4>
          <AccessTimeIcon
            style={{
              float: "left",
              color: "rgba(5, 107, 82, 0.842)",
              marginTop: "-1vh",
              height: "3vh",
            }}
          />
          <p
            style={{
              color: "rgba(5, 107, 82, 0.842)",
              fontWeight: "bold",
              float: "left",
              marginTop: "-4vh",
              marginLeft: "0vw",
            }}
          >
            {" "}
            2N-3D
            <LocationOnIcon
              style={{ width: "2vw", height: "2vh", marginLeft: "2vw" }}
            />
            <p style={{ display: "inline-block", marginTop: "14px" }}>Delhi</p>
          </p>
          <h3
            style={{
              marginTop: "-3vh",
              width: "20vw",
              height: "4vh",
            }}
            className="p1"
          >
            Tirthan Valley
          </h3>
          <p
            style={{
              marginRight: "10vw",
              marginTop: "-3vh",
              height: "3vh",
              width: "20vw",
            }}
            className="p2"
          >
            Starts at <strong>Rs.6,999/-</strong>{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default C3;
